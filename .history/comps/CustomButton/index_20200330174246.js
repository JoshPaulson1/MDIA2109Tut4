import React from 'react';
import '../cb.css';

//madec the UI
const CustomButton = ({text, color}) => <div 
style={{backgroundColor:color, boxShadow:"1px 1px 5px" +color}}
onClick={onClick}
>
<div className="custom_button_box">
    <div className="custom_button_box_inner">
       {text}
    </div>
</div>

function ButtonClick(){
    alert("clicked");
}

CustomButton.defaultProps = {
    text:"Default Button",
    color:"#DAB",
    onClick:ButtonClick
}
export default CustomButton;
