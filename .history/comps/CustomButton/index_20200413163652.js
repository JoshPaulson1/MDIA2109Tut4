import React, {useState, useEffect} from 'react';
import '../CustomButton/cb.css';

//madec the UI

const CustomButton = ({place, color, onClick}) => {
    const [valu, setValu] = useState("");

    return <div className="custom_button_box">
        <button onClick={(a)=>{
            setValu(a.target.color);
        }} color="#58F" place={place} />
        <CustomButton onClick={() => {
            //alert(val);
            onClick(valu);
        }} text="New button" color="#000" />
    </div>;
}

CustomButton.defaultProps = {
    place:"New Button",
    color:"#000",
    onClick:()=>{}
}
export default CustomButton;
