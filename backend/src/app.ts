const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const studentRoutes = require("./routes/student.route");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = 7777;
const MONGO_URI =
  "mongodb+srv://faeez:CnXAiW5eO1gsC5XY@cluster0.te7mo5q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(cors());
app.use(express.json());
app.use("/api", studentRoutes);

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err: any) => {
    console.log(err);
  });
