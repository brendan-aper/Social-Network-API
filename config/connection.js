const mongoose = require("mongoose");

mongoose.connect(
  process.env.MongoDB_URI || "mongodb://localhost:27017/BA-Social-network-API",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
