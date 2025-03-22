import mongoose from 'mongoose';

export const ConnectDb = async () => {
    try {
        const conn= await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDb connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("error in mongodb connection",error);
    }
}