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
            <Chat name={"user 1"} msg={msg} />
            <p />
            <Chat img={"https://images.idgesg.net/images/article/2018/02/artificial_intelligence_ai_virtual_assistant_robot_chatbot_thinkstock_856909876-100749925-large.3x2.jpg"} backgroundColor={"#FAB"} msg={resp} />
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