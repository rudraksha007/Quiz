import { useEffect, useState } from 'react';
import './Creator.css'
import { light } from '../../classes/Mode';
import QsPallet from './QsPallet.js'

export let add = null;
function Creator({ mode, profile }) {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        let icons = document.getElementsByClassName('addQsIcon');
        let addqs = document.getElementsByClassName('addQs');
        let qs = document.getElementsByClassName('qs');
        let qsop = document.getElementsByClassName('qsOp');
        if (icons.length == 0) return;
        let filter = '';
        if (mode === light) {
            filter = '';
        }
        else {
            filter = 'invert()';
        }
        for (let i = 0; i < icons.length; i++) {
            icons.item(i).style.filter = filter;
            if(i<qs.length){
                addqs.item(i).style.backgroundColor = mode.mainbg3;
                qs.item(i).style.backgroundColor = mode.mainbg3;
                qsop.item(i).style.color = mode.txt;
            }
        }
    }, [mode]);
    add = (ref) => {
        console.log(Array.from(document.getElementById('createCont').children));
        let index = Array.from(document.getElementById('createCont').children).indexOf(ref)-1;
        let replace = questions.slice();
        replace.splice(index, 0, <QsPallet mode={mode} key={Date.now()} bg={mode.mainbg3}/>);
        setQuestions(replace);
    }
    return (
        <>
            <div id="createContainer" style={{ backgroundColor: mode.mainBG }}>
                <div id="createCont" style={{ backgroundColor: mode.mainbg }}>
                    <div id="qsTitle" style={{ backgroundColor: mode.mainbg3 }}>
                        <div>
                            <h2 style={{ color: mode.txt }}>Title:</h2>
                            <input type="text" placeholder='Enter Quiz Title' style={{ borderColor: mode.txt, color: mode.txt }} />
                        </div>
                        <div style={{width: '40%'}}>
                            <h3 style={{ color: mode.txt }}>Time Limit</h3>
                            <input type="number" placeholder='Time in mins:' min='0' style={{ borderColor: mode.txt, color: mode.txt }} />
                        </div>
                        <div>
                            <h3 style={{ color: mode.txt }}>Description:</h3>
                            <input type="text" placeholder='Enter Quiz Description' style={{ borderColor: mode.txt, color: mode.txt }} />
                        </div>
                    </div>
                    {questions}
                    <div className='qdiv'>
                        <div className="addQs hoverable" style={{ backgroundColor: mode.mainbg3 }} onClick={(e) => add(e.currentTarget.parentNode, mode, questions, setQuestions)} >
                            <img src="/pics/add.png" alt="" className="addQsIcon" />
                        </div>
                    </div>
                </div>
                <div id='buttons'>
                    <div className='hoverable' style={{backgroundColor: mode.button, color:mode.navTxt}}>Save</div>
                    <div className='hoverable' style={{backgroundColor: mode.button, color:mode.navTxt}}>Publish</div>
                </div>
            </div>
        </>
    )
}
export default Creator;