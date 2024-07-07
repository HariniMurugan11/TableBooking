const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

// Create a new reservation
router.post('/reservations', async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).send(reservation);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all reservations
router.get('/reservations', async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).send(reservations);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
