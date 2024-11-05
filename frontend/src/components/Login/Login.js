import './Login.css';
import { Link } from 'react-router-dom';
import login from './script';

function Login({ mode }) {
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
                    <input type='button' value="Login" className="input" id="submit" style={Object.assign({...inputStyle}, {backgroundColor:'red'})} onClick={()=>login('user',  'pass', 'submit')}/>
                    <Link to="/reg" className="input" style={Object.assign({...inputStyle}, {backgroundColor:'#7ab71f'})}>Sign Up</Link>
                </form>
            </div>
        </div>
    )
}
export default Login;