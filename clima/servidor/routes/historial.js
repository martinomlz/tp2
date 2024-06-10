const express = require('express');
const router = express.Router();
const History = require('../models/historial');

// Obtener todo el historial
router.get('/', async (req, res) => {
  try {
    const history = await History.find();
    res.json(history);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Agregar una nueva entrada al historial
router.post('/', async (req, res) => {
  const { city, country, temperature, conditionText, icon } = req.body;

  const newHistory = new History({
    city,
    country,
    temperature,
    conditionText,
    icon,
  });

  try {
    const savedHistory = await newHistory.save();
    res.status(201).json(savedHistory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
