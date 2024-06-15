const mongoose = require('mongoose');

// Allow Promises
mongoose.Promise = global.Promise;

// Connection URL
const url = process.env.MONGOURL ? `${process.env.MONGOURL}/db_test` : "mongodb://localhost:27017/db_test";

// Connect to MongoDB
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true // Use this if you're using indexes
})
.then(() => {
  console.log('Connected to the database!');
})
.catch(err => {
  console.error('Error with the database connection!', err);
});

// Listen for connection errors after initial connection attempt
mongoose.connection.on('error', err => {
  console.error('Database connection error:', err);
});

