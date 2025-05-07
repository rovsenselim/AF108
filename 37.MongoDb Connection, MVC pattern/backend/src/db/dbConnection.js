import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Successfully connected to MongoDB");
}).catch((error) => {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1);
});
