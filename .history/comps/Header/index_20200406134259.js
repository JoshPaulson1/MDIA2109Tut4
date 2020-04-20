import React from 'react';
import './header.css';

const Header = ({text, fontSize , color , onMouseOver}) => <div
style={{fontSize, color, onMouseOver}}
className="Headers" onMouseOver={onMouseOver}>
    <h1 style={{fontSize:fontSize}}>{text}</h1>
</div>

function MouseOver(){
    alert("Default color");
}

Header.defaultProps = {
    fontSize:12,
    color:"#000",
    onMouseOver:MouseOver,
    text:"Header"
}

export default Header;