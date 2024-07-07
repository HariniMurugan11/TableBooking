// models/Reservation.js
const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: Date,
  numberOfGuests: Number,
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
