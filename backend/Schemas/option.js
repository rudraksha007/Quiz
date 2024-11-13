import mongoose from "mongoose";

const schema = mongoose.Schema({
    text: String,
    isCorrect: Boolean
});

export default schema;