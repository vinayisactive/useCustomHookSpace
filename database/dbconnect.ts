import mongoose from "mongoose";

const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL!)
    } catch (error) {
        console.log(error);
    }
}

export default dbconnect