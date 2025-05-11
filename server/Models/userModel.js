const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://avdishappy:NateBZUejWbcdlS7@cluster0.8pj80yg.mongodb.net/ochii?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected!');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};
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

module.exports = mongoose.model('User', userSchema);
