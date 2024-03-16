import mongoose from 'mongoose';

const connectToMongoDB = async () => {
  try {
    const conn = await mongoose.connect (process.env.MONGO_URI);
    console.log (`connect to MongoDB ${conn.connection.host}`.green.bgWhite);
  } catch (error) {
    console.log ('Error connecting to MongoDB', error.massage);
  }
};

export default connectToMongoDB;
