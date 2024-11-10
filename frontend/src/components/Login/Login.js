import './Login.css';
import { Link } from 'react-router-dom';

function Login({ mode, setProfile }) {
    const inputStyle = { backgroundColor: mode.card2, textDecoration: "none", fontSize: 'small', marginBottom: '2rem', borderStyle: 'solid', border:'solid 1px', borderColor: mode.txt, borderRadius: '2rem', textAlign: 'center', height: '6%', width: '60%', color: mode.txt, transition: 'all 0.5s' }
    return (
        <div id="loginView" style={{ backgroundColor: mode.mainBG }}>
            <div id="loginBox" style={{ backgroundColor: mode.card, boxShadow: '5px 5px 5px gray' }}>
                <h1 style={{color:mode.txt}}>Login</h1>
                <form id="inputs" action="/" method="post">
                    <input type="text" name="user" id="user" placeholder="Username" className="input" style={inputStyle} />
                    <input type="password" name="pass" id="pass" placeholder="Password" className="input" style={inputStyle} />
                    <div id="keep">
                        <input type="checkbox" name="keep" id="check" />
                        <p style={{color:mode.txt}}>Keep Me Logged In</p>
                    </div>
                    <input type='button' value="Login" className="input" id="submit" style={Object.assign({...inputStyle}, {backgroundColor:mode.submit})} onClick={()=>login('user',  'pass', 'submit', setProfile)}/>
                    <Link to="/reg" className="input" style={Object.assign({...inputStyle}, {backgroundColor:mode.submit2})}>Sign Up</Link>
                </form>
            </div>
        </div>
    )
}
export default Login;

function isEmpty(id) {
    return (document.getElementById(id).value.length === 0)
}

function login(user, pass, submit, setProfile) {
    var target = document.getElementById(submit);
    if (isEmpty(user) || isEmpty(pass)) {
        alert("Please fill all the fields");
        return;
    }
    if (document.getElementById(user).textContent.includes(" ")) {
        alert("Username can't contain spaces");
        return;
    }
    target.value = "";
    target.style.backgroundImage = "url('/pics/loading.gif')"
    target.style.backgroundRepeat = "no-repeat";
    target.style.backgroundSize = "contain";
    target.style.backgroundPosition = "center";
    var body = {
        user: document.getElementById(user).value,
        pass: document.getElementById(pass).value
    }
    setTimeout(function () {
        fetch("/login", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-type": "application/json" },
            mode: 'cors'
        }).then(async function (response) {
            if (response.status === 200) {
                response.json().then((data)=>{
                    console.log(data);
                    alert('login success');
                    setProfile(data);
                });
            }
        }).finally(() => {
            target.style.backgroundImage = "none";
            target.value = "Login";
        })
    }, 2000);
};
