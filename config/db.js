const mongoose = require('mongoose');

const connectDB = async() => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        //useNewUrlParser: true,
        //useCreateIndex: true,
        autoIndex: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.green.underline.bold)
}

module.exports = connectDB;