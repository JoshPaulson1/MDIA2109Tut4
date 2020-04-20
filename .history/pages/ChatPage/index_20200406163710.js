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
   const[msg, setMsg] = useState("pls type something!");
   const[resp, setResp] = useState("Let me respond to you!");


   return <div>
        <div id="welcome">
            <Header fontSize={32} text="Welcome to my app!"/>
        </div>
        <div id="chats" onClick={()=>{
            setWelcome("Start with sending a message.");
        }}>
            <Chat msg={msg} />
            <p />
            <Chat msg={resp} />
        </div>
        <div id="controls">
            <Input onClick={(val)=>{
                setMsg(val);
                if(val === "hi"){
                    setResp('I love pie');
                }
            }} />
        </div>
    </div>
}

ChatPage.defaultProps = {
}

export default ChatPage;