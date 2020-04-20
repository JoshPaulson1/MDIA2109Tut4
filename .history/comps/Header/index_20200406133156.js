import React from 'react';
import './header.css';

const Header = ({text, fontSize , color , onMouseOver}) => <div
style={{text, fontSize, color, onMouseOver}}
className="Headers" onMouseOver={onMouseOver}>
    <h1>Header</h1>
</div>

function MouseOver(){
    alert("Default color");
}

Header.defaultProps = {
    fontSize:12,
    color:"#000",
    onMouseOver:MouseOver
    text:"Header"
}

export default Header;