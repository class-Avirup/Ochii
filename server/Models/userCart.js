import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String
});

export default mongoose.model("Cart", cartSchema);