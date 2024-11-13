import mongoose from "mongoose";
import qSchema from "./question.js";

const quizSchema = mongoose.Schema({
    questions: [qSchema],
    author: String,
    time: Number
});

export default quizSchema;