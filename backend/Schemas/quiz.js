import mongoose from "mongoose";
import qSchema from "./question.js";

const quizSchema = mongoose.Schema({
    questions: [qSchema]
});

export default quizSchema;