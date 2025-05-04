const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

// Register
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userExist = await User.findOne({ username });
    if (userExist) return res.status(400).json({ message: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashed });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid credentials" });

    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
