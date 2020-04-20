import React from 'react';
import './header.css';

const Header = ({text, fontSize , color}) => <div
style={{fontSize, color}}
className="Headers" >
    <h1 style={{fontSize:fontSize}}>{text}</h1>
</div>



Header.defaultProps = {
    fontSize:12,
    color:"#000",
    text:"Header"
}

export default Header;