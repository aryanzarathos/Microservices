import {model,Schema } from "mongoose";
const userScheme= new Schema({
    name: { type: String, required: true },
    contact: { type: String, required: true },
    img:{ type: String },
    isDeleted: { type: Boolean, default: false },
})
export default model("crudusers", userScheme);