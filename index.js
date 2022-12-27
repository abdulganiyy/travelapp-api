const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/api/auth", async (req, res) => {
  try {
    const { email } = req.body;

    const token = jwt.sign({ email }, "SECRET", { expiresIn: "1hr" });

    res.status(200).json({
      email,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
