const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios");
const querystring = require("querystring");
const cors = require("cors");
const crypto = require("crypto");

// Routers
const userRouter = require("./routes/userRouter.js");
const adminRouter = require("./routes/adminRouter.js");
const authRouter = require("./routes/authRouter.js");
const songRouter = require("./routes/songRouter.js");
const albumRouter = require("./routes/albumRouter.js");
const statsRouter = require("./routes/statsRouter.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, FRONTEND_URL } = process.env;

// Validate required environment variables
if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI || !FRONTEND_URL) {
  throw new Error(
    "Missing required environment variables. Please check your .env file."
  );
}

// Middleware
app.use(cors({ origin: FRONTEND_URL })); // Restrict CORS to trusted frontend
app.use(express.json());

// Routers
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);
app.use("/api/songs", songRouter);
app.use("/api/albums", albumRouter);
app.use("/api/stats", statsRouter);

// Spotify API URLs
const AUTH_URL = "https://accounts.spotify.com/authorize";
const TOKEN_URL = "https://accounts.spotify.com/api/token";
const SPOTIFY_API_URL = "https://api.spotify.com/v1";

// Step 1: Redirect user to Spotify's login page
app.get("/auth/login", (req, res) => {
  const state = crypto.randomBytes(16).toString("hex"); // Generate a random state string
  const scope = "user-library-read user-read-email playlist-read-private";
  const authUrl = `${AUTH_URL}?response_type=code&client_id=${CLIENT_ID}&scope=${scope}&redirect_uri=${REDIRECT_URI}&state=${state}`;
  res.redirect(authUrl);
});

// Step 2: Spotify callback - exchange code for access token
app.get("/auth/callback", async (req, res) => {
  const { code } = req.query; // The authorization code from Spotify

  if (!code) {
    return res.status(400).send("Authorization code is required.");
  }

  const authOptions = {
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  const tokenData = querystring.stringify({
    code,
    redirect_uri: REDIRECT_URI,
    grant_type: "authorization_code",
  });

  try {
    const response = await axios.post(TOKEN_URL, tokenData, authOptions);
    const { access_token, refresh_token, expires_in } = response.data;

    console.log("Access Token:", access_token);

    if (!access_token) {
      return res.status(400).send("Access token missing.");
    }

    // Use secure cookies or headers to pass the token to the frontend
    res.cookie("access_token", access_token, { httpOnly: true, secure: true });
    res.redirect(`${FRONTEND_URL}?access_token=${access_token}`);
  } catch (error) {
    console.error(
      "Error during token exchange:",
      error.response?.data || error.message
    );
    res.status(500).send("Authentication failed.");
  }
});

// Step 3: Make API requests with the access token
app.get("/api/playlists", async (req, res) => {
  const accessToken = req.header("Authorization")?.replace("Bearer ", "");

  if (!accessToken) {
    return res.status(400).json({ error: "Access token is required." });
  }

  try {
    const response = await axios.get(`${SPOTIFY_API_URL}/me/playlists`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    res.json(response.data);
  } catch (error) {
    console.error(
      "Error fetching playlists:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
