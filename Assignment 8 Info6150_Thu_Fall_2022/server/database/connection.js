const mongoose = require('mongoose');

console.log("yobaby")

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect("mongodb://localhost:27017/usermanagement", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true
        })
        console.log("2222")
        console.log(`MongoDB connected : ${con.connection.host}`);
        
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

console.log("asdsadlkm")

module.exports = connectDB