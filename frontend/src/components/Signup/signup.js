import './Signup.css';
import { Link } from 'react-router-dom';

function Signup({ mode }) {
    const inputStyle = { backgroundColor: mode.card2, textDecoration: "none", fontSize: 'small', marginBottom: '2rem', borderStyle: 'solid', border: 'solid 1px', borderColor: mode.txt, borderRadius: '2rem', textAlign: 'center', height: '6%', width: '60%', color: mode.txt, transition: 'all 0.5s'}
    return (
        <div id="loginView" style={{ backgroundColor: mode.mainBG }}>
            <div id="loginBox" style={{ backgroundColor: mode.card, boxShadow: '5px 5px 5px gray' }}>
                <h1 style={{ color: mode.txt }}>Sign Up</h1>
                <form id="inputs" action="/" method="post">
                    <input type="text" name="name" id="name1" placeholder="Full Name" className="input" style={inputStyle} />
                    <input type="text" name="user" id="user" placeholder="Username" className="input" style={inputStyle} />
                    <input type="password" name="pass" id="pass" placeholder="Password" className="input" style={inputStyle} />
                    <input type='button' value="Sign Up" className="input" id="submit" style={Object.assign({...inputStyle}, {backgroundColor:'red'})} />
                    <Link to="/login" className="input" style={Object.assign({...inputStyle}, {backgroundColor:'#7ab71f'})}>Login</Link>
                </form>
            </div>
        </div>
    )
}
export default Signup;