import React, { useState } from 'react';
import './input.css';
import CustomButton from '../CustomButton';

const Input = ({ placeholder, onClick }) => {
    const [val, setVal] = useState("");

    return <div className="input_cont">
        <input onChangetype={(e)=>{
            setVal(e.target.value);
        }} type="text" placeholder={placeholder} />
        <CustomButton onClick={() => {
            //alert(val);
            onclick(val);
        }} text="send" color="#58F" />
    </div>;
}

Input.defaultProps = {
    placeholder: "Type your chat here!",
    onclick:()=>{}
}

export default Input;