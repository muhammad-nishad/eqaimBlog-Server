const mongoose=require('mongoose')

const connectDB=async()=>{

    try {
        mongoose.set("strictQuery", false);
        const connect=mongoose.connect('mongodb://localhost:27017/eqaimblog')
        console.log('db connected');
        
    } catch (error) {
        
    }
}

module.exports=connectDB;