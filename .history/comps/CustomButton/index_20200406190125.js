import React, {useState, useEffect} from 'react';
import '../CustomButton/cb.css';

//madec the UI

const CustomButton = ({text, color, onClick}) => {
    const [valu, setValu] = useState("");

    return <div className="custom_button_box">
        <input onChange={(a)=>{
            setValu(a.target.color);
        }} color="#58F" Text={text} />
        <CustomButton onClick={() => {
            //alert(val);
            onClick(valu);
        }} text="New button" color="#000" />
    </div>;
}

CustomButton.defaultProps = {
    text:"New Button",
    color:"#000",
    onClick:()=>{}
}
export default CustomButton;
