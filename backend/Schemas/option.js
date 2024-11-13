import mongoose from "mongoose";

const opSchema = mongoose.Schema({
    text: String,
    isCorrect: Boolean
});

export default opSchema;