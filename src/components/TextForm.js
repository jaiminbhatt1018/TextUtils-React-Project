
import React, {useState} from 'react'
import './TextForm.css'
export default function TextForm(props) {
  const[text,setText]=useState("");
  const[word,setWord]=useState(0);
  
  const handelUpClicked=()=>{
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted to Upper Case","success");
  }
  const handelLowClicked=()=>{
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been converted to Lower Case","success");
  }
  const handelRead=()=>{
    let speech = new SpeechSynthesisUtterance(text); 
    window.speechSynthesis.speak(speech); 
  }
  const handelClearText=()=>{
    setText(''); 
    setWord(0);
    props.showAlert("Text has been cleared","success");
  }
  const handelOnChange=(event)=>{
    console.log("Text changed!");
    setText(event.target.value);
    setWord(text.split(" ").length)//to count total words and remove small bug. 
  }
   
  const st={
    color:props.bg==='white'||props.bg==='lightgreen'?'black':'white'
  }
  return (
    <div className='container'>
    <div className="mb-3" style={st}>
       <h1 >{props.heading}</h1>
        <textarea style={{backgroundColor:props.bg==='black'||props.bg==='#101d31'?'white':'#101d31', color:props.bg==='white'||props.bg==='lightgreen'?'white':'black'}} className="form-control" value={text} onChange={handelOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        <div className="btns">
        <button className=" btn btn-primary" onClick={handelUpClicked}>Convert to Uppercase</button>
        <button className="  btn btn-primary" onClick={handelLowClicked}>Convert to Lowercase</button>
        <button className="  btn btn-primary" onClick={handelRead}>Read Text</button>
        <button className="  btn btn-primary" onClick={handelClearText}>Clear Text</button>
        </div>
        
    <div className="container my-3" style={st}>
      <h1>Text Summary</h1>
      <p><b>{word}</b >  words and <b>{text.length}</b> Characters </p>
      <p> Can take <b>{0.008*word}</b>  minutes to read</p>

      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </div>
  )
}
