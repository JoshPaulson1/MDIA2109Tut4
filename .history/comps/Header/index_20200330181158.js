import React from 'react';
import './header.css';

const CustomHeader = ({fontSize , color , onMouseOver}) => <div
style={{fontSize:12, color:"#000"}}
className="Custom_Header" onMouseOver={MouseOver}
>
<div className="custom_Header">
       {fontSize}
    </div>
</div>

function MouseOver(){
    alert("mouse is over");
}

CustomHeader.defaultProps = {
    fontSize:12,
    color:"#000",
    onMouseOver:MouseOver
}

export default CustomHeader;