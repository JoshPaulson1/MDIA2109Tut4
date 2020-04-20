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
const[color,setColor] = useState("#DAD");
const[text,setText] = useState("Default Button");

   return <div>
        <div id="welcome">
            <Header fontSize={32} text="Welcome to my app!"/>
        </div>
        <div id="chats" onClick={()=>{
            setWelcome("Start with sending a message.");
        }}>
            <Chat name={"user 1"} msg={msg} />
            <p />
            <Chat img={"https://i.pinimg.com/236x/15/08/81/150881a848112f174c0e70e658e54018.jpg"} backgroundColor={"#FAB"} msg={resp} />
        </div>
        <div id="controls">
            <Input onClick={(val)=>{
                setMsg(val);
                CheckResponse(val);
                var new_resp = CheckResponse(val);
                setResp(new_resp);
                /*if(val === "hi"){
                    setResp('I love pie');
                }*/
            }} />
        </div>
        <div id="custom_button">
                <CustomButton onClick={(valu) => {
                    setColor(valu);
                    setText(valu);
                }} />
            </div>
    </div>
}


function CheckResponse(inp){
switch(inp.toLowerCase()){
    case "hi":
        return "I love pie";

        case "how are you?":
            return "Great!";
        default:
            return "I don't understand what you are trying to say";
}
}
ChatPage.defaultProps = {
}

export default ChatPage;