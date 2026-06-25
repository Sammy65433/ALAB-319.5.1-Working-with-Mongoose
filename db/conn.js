import mongoose from "mongoose";

// import { MongoClient } from "mongodb";

async function connectDB() {
  try {
    await mongoose.connect(process.env.ATLAS_URI);
    console.log("Mongoose connected");
  } catch (e) {
    console.error(e);
  }
}

export default connectDB;

// async function connectDB() {
//     try {
// await mongoose.connect(process.env.MONGO_URI);
// console.log('Mongobd Connected')


//     } catch(e) {
//         console.error(e);
//     }


// }
// export default connectDB;
