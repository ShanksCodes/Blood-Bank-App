const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected To Mongodb Database ${mongoose.connection.host}\n`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`Mongodb Database Error ${error}\n`.bgRed.white);
  }
};

module.exports = connectDB;