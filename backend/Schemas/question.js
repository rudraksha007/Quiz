import mongoose from "mongoose";

const qSchema = mongoose.Schema({
    question: String,
    type: String,
    options: [String]
});

export default qSchema;