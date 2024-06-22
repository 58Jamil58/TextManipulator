import React,{useState} from 'react'
import Proptypes from 'prop-types'

export default function TextForm(props) {
    const handleUpCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success");
    }
    const handleLoCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleOnCopy = ()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied!","success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[' ']+/);
        setText(newText.join(" "))
        props.showAlert("Extra Space Removed!","success");
    }
    const handleOnClear = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Cleared!","success");
    }
    const [text,setText] = useState('');
    return (
        <>
            <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" value = {text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#212529',color:props.mode==='dark'?'white':'black'}}  id="myBox" rows="10"></textarea>
            </div>  
            <button className="btn btn-primary mx-2 my-1" onClick={handleUpCase}>Convert To Uppercaser</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleLoCase}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleOnCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleOnClear}>Clear Text</button>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.length==0?0:text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008*(text.length==0?0:text.split(" ").length)} minutes to read these words</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Please enter something in the TextBox to preview here'}</p>

            </div>
    </>
  )
}
