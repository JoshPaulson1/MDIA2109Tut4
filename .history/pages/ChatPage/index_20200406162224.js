import React, { useState } from 'react';
import './chatpage.css';
import Chat from '../../comps/Chat';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import Input from '../../comps/Input';

/*
var welcome_state = "welcome to my app!"
function SetWelcome(){
    welcome_state = "Start with sending a message."
    document.querySelector('#welcome').innerText = welcome;
}
*/

const ChatPage = ({}) => {
const [welcome, setWelcome] = useState("Welcome to my App!");
   const[msg, setMsg] = useState("");

   return <div>
        <div id="welcome">
            <Header fontSize={32} text={welcome} />
        </div>
        <div id="chats" onClick={()=>{
            setWelcome("Start with sending a message.");
        }}>
            <Chat />
        </div>
        <div id="controls">
            <Input onClick={()=>{
                setMsg()
            }} />
        </div>
    </div>
}

ChatPage.defaultProps = {

}

export default ChatPage;