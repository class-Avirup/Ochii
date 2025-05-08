import mongoose from "mongoose";

const courseSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})
export default mongoose.model("Course",courseSchema);
