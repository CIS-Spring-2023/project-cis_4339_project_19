const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { user } = require("../models/models");
const saltRounds = 10;
const org = process.env.ORG;

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    user.findOne({ email }, async (error, data) => {
      if (error) {
        return res.status(404).json({ message: error });
      } else if (!data) {
        return res.status(404).json({ message: "User not found" });
      } else {
        const isPasswordCorrect = await bcrypt.compare(password, data.password);
        if (!isPasswordCorrect) {
          return res.status(400).json({ message: "Invalid credentials" });
        }

        process.env.ORG = data.org;
        res.json(data);
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { email, password, role, org } = req.body;

    // Check if user with email already exists
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User with email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user object
    const newUser = new user({
      email,
      password: hashedPassword,
      role,
      org,
    });

    // Save new user to database
    await newUser.save();

    // Return success message
    return res.status(200).json({ message: "User signup successful" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
