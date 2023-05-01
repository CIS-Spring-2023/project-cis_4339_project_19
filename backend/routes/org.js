const express = require("express");
const router = express.Router();

const org = process.env.ORG;

// importing data model schemas
const { orgs } = require("../models/models");

// GET org
router.get("/:id", (req, res, next) => {
  orgs.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// GET ALL org
router.get("/", (req, res, next) => {
  orgs.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Regiater org
router.post("/register", async (req, res, next) => {
  try {
    const { name } = req.body;

    // Check if organization already exists
    const org = await orgs.findOne({ name });
    if (org) {
      return res.status(400).json({ message: "Organization already exists" });
    }

    // Create new organization
    const newOrg = new orgs({ name });
    await newOrg.save();

    res.status(201).json({ message: "Organization registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
