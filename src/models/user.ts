import {model,Schema } from "mongoose";
const userScheme= new Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    isDeleted: { type: Boolean, default: false },
})
export default model("users", userScheme);