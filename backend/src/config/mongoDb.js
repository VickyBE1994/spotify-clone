import mongoose from 'mongoose'


const mongoDb =async()=>{

    mongoose.connection.on("connected",()=>{
          console.log("mongoDb connected");
          
    })

   await mongoose.connect(`${process.env.MONGODB_URI}/spotify`)
}

export default mongoDb