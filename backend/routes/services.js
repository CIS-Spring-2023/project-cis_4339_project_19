const express = require("express");
const router = express.Router();
const { service } = require("../models/models");
const org = process.env.ORG;
// Create a new service

router.post("/services", async (req, res) => {
  try {
    const { name, description, active } = req.body;
    const newService = new service({ name, description, active, org: org });
    await newService.save();
    res.status(201).send(newService);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all active services
router.get("/services", async (req, res) => {
  try {
    const services = await service.find({ org: org, active: true });
    res.send(services);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a specific service by ID
router.get("/services/:id", async (req, res) => {
  try {
    const SelectedService = await service.findById(req.params.id);
    if (!SelectedService) {
      return res.status(404).send();
    }
    res.send(SelectedService);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a service by ID
router.patch("/services/:id", async (req, res) => {
  const updates = Object.keys(req.body);

  try {
    const SelectedService = await service.findById(req.params.id);
    if (!SelectedService) {
      return res.status(404).send();
    }
    updates.forEach((update) => (SelectedService[update] = req.body[update]));
    await SelectedService.save();
    res.send(SelectedService);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Soft delete a service by ID
router.delete("/services/:id", async (req, res) => {
  try {
    const DeletedService = await service.findById(req.params.id);
    if (!DeletedService) {
      return res.status(404).send();
    }
    DeletedService.active = false;
    await DeletedService.save();
    res.send(DeletedService);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
