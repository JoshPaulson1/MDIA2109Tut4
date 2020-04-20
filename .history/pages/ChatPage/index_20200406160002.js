import React, {useState} from 'react';
import './chatpage.css';
import Chat from '../../comps/Chat';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import Input from  '../../comps/Input';

var welcome_state = "welcome to my app!"
function ChangeWelcome(){
    welcome_state = "Start with sending a message."
    document.querySelector('#welcome').innerText = welcome_state;
}
const ChatPage = ({}) => <div>
<div id="welcome">
<Header fontSize={32} text="Welcome to my app!" />
</div>
<div id="chats" onClick={ChangeWelcome}>
    <Chat />
</div>
<div id="controls">
    <Input />
</div>
</div>

ChatPage.defaultProps = {

} 

export default ChatPage;