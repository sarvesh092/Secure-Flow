import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    console.log(`\n mongodb connected !!`);
  } catch (error) {
    console.log("DB error", error);
    process.exit(1);
  }
};
export { connectDb };
