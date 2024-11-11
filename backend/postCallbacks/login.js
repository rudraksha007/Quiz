import profile from "../Schemas/profile.js";

function login(body, res) {
    profile.findOne({ user: body.user }).then((data) => {
        if (data.length == 0) {
            res.status(404).send('User does not exist');
            return;
        }
        if (body.pass != null || body.autoCode != null) {
            if (body.pass == data.pass) {
                if (body.checked) {
                    let autoCode = Math.round(Math.random() * 100000000);
                    data.autoCode = autoCode;
                    profile.updateOne({ user: body.user }, { autoCode: autoCode }).exec();
                }
                else data.autoCode = null;
                res.status(200).json(data);
            } 
            else if(body.autoCode == data.autoCode){
                res.status(200).json(data);
            }
            else {
                res.status(401).send("Wrong password entered");
            }
        }
    })

}

export default login;