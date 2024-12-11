const express = require("express");
const dotenv = require("dotenv");

const userRouter = require("./routes/userRouter.js");
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use("/api/users", userRouter);
// app.use("/", indexRouter);
// app.use("/users", usersRouter);
// app.use("/admin", adminRouter);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
