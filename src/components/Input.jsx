import React, { useRef, useState } from 'react';

const Input = () => {
    const [text,setText]=useState("");
    const inputRef=useRef('');
    const focus=()=>{
        inputRef.current.focus();
    }
    return (
        <div>
            <input ref={inputRef} type="text" value={text} onChange={(e)=>{setText(e.target.value)}} />
            <div>My name is {text} </div>
            <button onClick={focus}>Click</button>
        </div>
    );
}

export default Input;
