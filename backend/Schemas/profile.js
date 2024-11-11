import mongoose from "mongoose"
import quizSchema from "./quiz.js";

const schema = mongoose.Schema({
    Name: String,
    user: String,
    pass: String,
    autoCode: Number,
    ips:[String],
    dp:String,
    no_quiz: Number,
    corrects: Number,
    wrongs: Number,
    quizes: [quizSchema]
});

export default mongoose.model('profile', schema);