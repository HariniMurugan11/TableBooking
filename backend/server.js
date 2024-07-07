const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

const db = require('./db'); // Ensure this file is correctly setting up your MongoDB connection
const reservationRoutes = require('./routes/reservations');

app.use(cors());
app.use(express.json());
app.use('/api', reservationRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
