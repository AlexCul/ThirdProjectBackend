const mongoose = require('mongoose');
const mongoUri = 'mongodb://mongo-mongos.mongo-sharded:27017';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB Cluster"))
  .catch(err => console.error("MongoDB connection error:", err));

while (true) console.log("HEY THERE MF");
