import mongoose, { Schema } from "mongoose"

const schema = mongoose.Schema({
    Name: String,
    user: String,
    pass: String,
    autoCode: Number,
    dp:String,
    no_quiz: Number,
    corrects: Number,
    wrongs: Number,
    quizes: [{type: Schema.Types.ObjectId, ref:'quiz'}]
});

export default mongoose.model('profile', schema);