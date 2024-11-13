import mongoose from "mongoose";
import option from './option.js'

const qSchema = mongoose.Schema({
    question: String,
    type: String,
    options: [option]
});

export default qSchema;