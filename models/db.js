const mongoose = require('mongoose');
// Allow Promises
mongoose.Promise = global.Promise;
// Connection
const url = `${process.env.MONGOURL}/db_test` || "mongodb://localhost:27017/db_test";
mongoose.connect(url, { useNewUrlParser: true,useUnifiedTopology:true,useFindAndModify:false  });
// Validation
mongoose.connection
  .once('open', () => console.log('Connected to the database!'))
  .on('error', err => console.log('Error with the database!', err));
