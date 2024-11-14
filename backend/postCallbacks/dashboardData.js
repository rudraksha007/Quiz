import quiz from "../Schemas/quiz.js";
import profile from "../Schemas/profile.js";

async function dashboardData(req, res){
    
    var body = req.body;
    var data = await profile.findOne({ user: body.user });
    // console.log(body);
    
    if (data.length == 0) {
        res.status(404).send('User does not exist');
        return;
    }
    if (body.autoCode != null) {
        if (body.autoCode == data.autoCode) {
            var quizzes = await quiz.find().sort({_id:-1});
            var response = {}
            var i = 0;
            for (const quiz of quizzes){
                console.log(quiz);
                response[i] = {title: quiz.title, author: quiz.author, desc: quiz.desc, time: quiz.time, id:quiz._id}
                i++;
            }
            res.status(200).json(response);  
        }
        else {
            res.status(401).send("Last used password on this device was wrong");
        }
    }
    else{
        console.log('null');
        
    }
}

export default dashboardData;