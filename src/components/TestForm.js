import React,{useState} from 'react'
export default function TestForm(props) {
  const handleupClick=()=>{
    // console.log("Uppercase was clicked" +text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to Uppercase!","success");

  }
  const handleloClick=()=>{
    // console.log("Uppercase was clicked" +text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to Lowercase!","success");

  }
  const handleclearClick=()=>{
    // console.log("Uppercase was clicked" +text);
    let newText='';
    setText(newText);
    props.showAlert("Text Cleared!","success");

  }
  const handleOnChange=(event)=>{
    // console.log("On Change");
    setText(event.target.value); 

  }
  const handleCopy=()=>{
    // console.log("I am copy"); 
    var text=document.getElementById("myBox");
    text.select();
   
    navigator.clipboard.writeText(text.value);


    props.showAlert("Copy to Clipboard!","success");

  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed","success");

     

  }


  const [text, setText]=useState('');
  // setText=("new text");
  return ( 
    <>  
<div className="container" style= {{color:props.mode==='dark'?'white':'#042743'}} >
    <h1>{props.heading}</h1>

<div className="mb-3">
 
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}  id="myBox" rows="8"></textarea>
 </div>
 <button className="btn btn-primary mx-2 " onClick={handleupClick}>Convert to Uppercase</button>
 <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to Lowercase</button>
 <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>

 <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>

 <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra spaces</button>
 </div>
<div className="container my-2"style={{color:props.mode==='dark'?'white':'black'}}>
  <h1>Your text summary</h1>
  <p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").length} Minutes read </p>
<h1>Preview</h1>
<p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
</div>
 </>
 
  )
}
