import mongoose, { model , Schema } from "mongoose";

const UserSchema = new Schema({
    name:{type:String,trim:true,required:true},
    email:{type:String,trim:true,required:true,unique:true},
    password:{type:String,trim:true,required:true},
    join:{type:Date,default:Date.now()}
});

const UserModel = new model('User',UserSchema);
export default UserModel;

