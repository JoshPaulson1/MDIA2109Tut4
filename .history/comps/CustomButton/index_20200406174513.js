import React, {useState, useEffect} from 'react';
import '../CustomButton/cb.css';

//madec the UI

const CustomButton = ({text, color,onClick}) => <div 
style={{backgroundColor:color, boxShadow:"1px 1px 5px" +color}}
className="custom_button_box" onClick={onClick}
>
    <div className="custom_button_box_inner">
       {text}
    </div>
</div>

function ButtonClick(){
    alert("clicked");
}

CustomButton.defaultProps = {
    text:"New Button",
    color:"#000",
    onClick:ButtonClick
}
export default CustomButton;
