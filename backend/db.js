// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://harinimurugan112004:harini2004@customer.biqe18k.mongodb.net/?retryWrites=true&w=majority&appName=customer', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
