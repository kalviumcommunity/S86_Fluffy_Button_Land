// routes/buttonRoutes.js
const express = require('express');
const router = express.Router();
const Button = require('../models/button');

// Create a button
router.post('/', async (req, res) => {
  try {
    const button = new Button(req.body);
    const saved = await button.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all buttons
router.get('/', async (req, res) => {
  try {
    const buttons = await Button.find();
    res.status(200).json(buttons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a button
router.put('/:id', async (req, res) => {
  try {
    const updated = await Button.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a button
router.delete('/:id', async (req, res) => {
  try {
    await Button.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Button deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
