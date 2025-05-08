import mongoose from 'mongoose';


const connect = async () => {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/ochii');
    } catch (error) {
        console.log(error);
    }
}
connect();

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    username: String,
    isAdmin: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model('User', userSchema);