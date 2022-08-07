const mongoose = require("mongoose");
const uri = "mongodb+srv://leonbehrndt:admin123@cluster0.nzthn0t.mongodb.net/users?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    // mongodb connection string
    const con = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB conncected: ${con.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
