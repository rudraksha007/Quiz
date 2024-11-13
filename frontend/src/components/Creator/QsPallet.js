import { dark } from "../../classes/Mode";
import { add } from "./Creator";
import { useState } from "react";
import Option from "./Option";

function QsPallet(props) {
    const [options, setOptions] = useState([<Option key={Date.now()}/>]);
    let filter = '';
    let color = '';
    if (props.mode == dark) {
        filter = 'invert()';
        color = 'white';
    } else {
        color = 'black';
    }
    return (
        <div className="qdiv">
            <div className="addQs" style={{ backgroundColor: props.bg }} onClick={(e) => add(e.currentTarget.parentNode)}>
                <img src="/pics/add.png" alt="" className="addQsIcon" style={{ filter: filter }} />
            </div>
            <div className="qs" style={{ backgroundColor: props.bg }}>
                <div className='qsSubCont'>
                    <input type="text" className='qsStatement' name="qs" placeholder='Type Your Question' />
                    <select title='Question type' name="type" className="qsType hoverable" style={{ backgroundColor: 'inherit', color: 'gray' }}>
                        <option value="mcqs">MCQ- Single Correct</option>
                        <option value="mcqm">MCQ- Multi Correct</option>
                    </select>
                </div>
                <ol className="qsOp" style={{ color: color }}>
                    {options}
                </ol>
                <div className="addOp hoverable" onClick={()=>addOp(options, setOptions)}>
                    <img src="/pics/add.png" alt="" className="addQsIcon" style={{ filter: filter }} /> <span style={{ color: 'gray' }}>Add Option</span>
                </div>
            </div>
        </div>
    )
}

export default QsPallet;

function addOp(options, setOptions) {
    setOptions([...options, <Option key={Date.now()}/>])
}