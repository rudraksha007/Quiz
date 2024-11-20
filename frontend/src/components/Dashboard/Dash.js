import React, { useEffect } from 'react';
import './dash.css'
import { Link, useNavigate } from 'react-router-dom'
import Quiz from './Quiz';
import Popup from './Popup';
import Leader from './Leader';

class Dash extends React.Component {
    sec = null;
    constructor(props) {
        super(props);
        this.state = {
            quizzes: [],
            data: {},
            leaderboard:[]
        };

    }
    componentDidMount() {
        setTimeout(() => {
            if (this.props.profile !== null) {
                var body = { user: this.props.profile.user, autoCode: this.props.profile.autoCode }
                fetch('/dash', {
                    method: 'POST',
                    body: JSON.stringify(body),
                    headers: { "Content-type": "application/json" },
                    mode: 'cors'
                }).then(async (res) => {
                    res.json().then((data) => {
                        console.log(data);
                        
                        var arr = []
                        var list = Object.keys(data.quizzes);
                        var i = 0
                        for (const x in list) {
                            console.log('ran');
                            
                            arr.push(<Quiz title={data.quizzes[x].title} time={data.quizzes[x].time} open={() => this.openPopup(data.quizzes[x])} key={Date.now()+i} />)
                            i++;
                        }
                        let arr2 = []
                        i=0;
                        for (const x in Object.keys(data.leaderboard)){
                            console.log(data.leaderboard);
                            
                            arr2.push(<Leader name={data.leaderboard[x].playerName} corrects={data.leaderboard[x].corrects} key={Date.now()+i}/>);
                            i++;
                        }
                        this.setState(() => ({ quizzes: arr, leaderboard:arr2 }));
                    });
                });
            }
            else{
                this.sec = <Navigate dest={'/'}/>
                this.forceUpdate();
            }
        }, 1000);
    }
    render() {
        let mode = this.props.mode;
        return (
            <>
                <div id="dashHead" style={{ backgroundColor: mode.mainbg2 }}>
                    <Link to='/create' className='but' style={{ backgroundColor: mode.button, color: mode.navTxt }}>New Quiz</Link>
                    <input type="text" name="search" id="search" placeholder='Search Quiz' />
                </div>
                <div id="dashCont" style={{ backgroundColor: mode.mainBG }}>
                    <div className="section" style={{ backgroundColor: mode.card, color: mode.txt }}>
                        <h2>Latest Quizzes</h2>
                        <div className="section-item-box" id='quizzes'>
                            {this.state.quizzes}
                        </div>
                    </div>
                    <div className="section" style={{ backgroundColor: mode.card, color: mode.txt }}>
                        <h2>Challenges</h2>
                        <div className="section-item-box" id='challenges'>
                        </div>
                    </div>
                    <div className="section" style={{ backgroundColor: mode.card, color: mode.txt }}>
                        <h2>Leaderboard</h2>
                        <div className="section-item-box" id='leaderboard'>
                            {this.state.leaderboard}
                        </div>
                    </div>
                </div>
                <Popup mode={mode} data={this.state.data}/>
                {this.sec}
            </>
        );
    }

    openPopup(data) {
        this.setState(()=>({data: data}));
        document.getElementById('popup').style.zIndex = 1;
    }
}
export default Dash;

function Navigate({dest}){
    let nav = useNavigate();
    useEffect(()=>{
        nav(dest);
    }, []);
    return(<></>)
}