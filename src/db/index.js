import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async() => {
    try {
     const connectioninstance =  await mongoose.connect(process.env.MONGODB_URI).then(() => {
      console.log("MONGODB CONNECTED !! DB HOST "); 
    }); // conectioninstance.connection.host is one of properties
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR : ", error);
        process.exit(1)
    }
}
export default connectDB;