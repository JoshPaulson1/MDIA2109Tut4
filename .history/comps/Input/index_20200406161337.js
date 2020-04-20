import React, {useState} from 'react';
import './input.css';
import CustomButton from '../CustomButton';

const Input = ({placeholder}) => {
    const [val,setVal] = useState("");
return <div className="input_cont">
<input onChangetype={(e)=>{
setVal(e.target.value);
}}type="text" placeholder={placeholder} />
<CustomButton text="send" color="#58F"/>
</div>;
}

Input.defaultProps = {
placeholder:"Type your chat here!"
}

export default Input;