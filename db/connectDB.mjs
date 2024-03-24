import { connect } from "mongoose";

const connectDB = async (url)=>{
    const options = {
        dbname : "AuthDB"
    }
    try {
    const res = await connect(url,options);
    console.log("connect sucessfully",options.dbname);
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;