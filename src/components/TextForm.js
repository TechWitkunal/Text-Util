import React, { useState } from 'react';

export default function TextForm(props) {

    const handleUpClick = () => {
        setText(text.toUpperCase());
    }

    const handleLoClick = () => {
        setText(text.toLowerCase());
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const clearText = () => {
        setText("");
    }

    const speakText = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const copyText = () => {
        try {
            navigator.clipboard.writeText(text);
            alert("Text copied successfully!");
        } catch (error) {
            alert("Sorry, we can't copy it in your device, may be permision in not allowed");
        }
    };

    const [text, setText] = useState('Enter text here');
    const [myStyle, setMyStyle] = useState({
        color: "white",
        backgroundColor: "black"
    })

    // const [classes, updateClass] = useState('btn-danger');

    const toggleStyle = () => {
        if (myStyle.color === "white") {
            setMyStyle({
                color: "black",
                backgroundColor: "white"
            })
            document.querySelector("table").classList.remove("table-dark")
        } else {
            setMyStyle({
                color: "white",
                backgroundColor: "black"
            })
            document.querySelector("table").classList.add("table-dark")
        }
    }

    return (
        <>
            <div className="container my-3">
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    {/* <label htmlFor="myBox" className="form-label">{props.heading}</label> */}
                    <textarea className="form-comtrol" style={myStyle} value={text} onChange={handleOnChange} id="myBox" rows="12"></textarea>
                </div>
                <button className='btn btn-primary my-2' onClick={handleUpClick}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-2 my-2' onClick={handleLoClick}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-2 my-2' onClick={speakText}>Speek text</button>
                <button className='btn btn-primary mx-2 my-2' onClick={copyText}>Copy Text</button>
                <button className='btn btn-primary mx-2 my-2' onClick={clearText}>Clear Text</button>
                <button className='btn btn-primary mx-2 my-2' onClick={toggleStyle}>Change Color</button>
            </div>
            <div className="container my-5">
                <h4>Your Text summary</h4>
                <table className="table table-dark" style={myStyle}>
                    <thead>
                        <tr>
                            <th scope="col">Words</th>
                            <th scope="col">Character</th>
                            <th scope="col">Time to read it</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{text.split(" ").length}</td>
                            <td>{text.length}</td>
                            <td>{0.008 * text.split(" ").length}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}