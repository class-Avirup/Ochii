import mongoose from "mongoose";

const querySchema= mongoose.Schema({
    name: String,
    company: String,
    goal:String,
    date:String,
    budget:String,
    email:String,
    details:String
    
    
})
export default mongoose.model('query',querySchema);