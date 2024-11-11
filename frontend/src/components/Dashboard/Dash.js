import './dash.css'
import {Link} from 'react-router-dom'

function Dash({mode, profile}){
    return(
        <>
        <div id="dashHead" style={{backgroundColor: mode.mainbg2}}>
            <Link to='/create' className='but' style={{backgroundColor: mode.button, color: mode.navTxt}}>New Quiz</Link>
            <input type="text" name="search" id="search" placeholder='Search Quiz'/>
        </div>
        <div id="dashCont" style={{backgroundColor: mode.mainBG}}>
            <div className="section" style={{backgroundColor: mode.card, color: mode.txt}}>
                <h2>Latest Quizzes</h2>
                <div className="section-item-box">
                    
                </div>
            </div>
            <div className="section" style={{backgroundColor: mode.card, color: mode.txt}}>
                <h2>Challenges</h2>
                <div className="section-item-box">

                </div>
            </div>
            <div className="section" style={{backgroundColor: mode.card, color: mode.txt}}>
                <h2>Leaderboard</h2>
                <div className="section-item-box">

                </div>
            </div>
        </div>
        </>
    );
}

export default Dash;