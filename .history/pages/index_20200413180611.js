import Link from 'next/Link';
import Router from 'next/router';
import './app.css';

function ClickIndex(){

    document.querySelector("#mainapp").opacity = 0;
    setTimeout(function(){
        Router.push("/ChatPage");
    },1000)
}

const Index = () => <div id="mainapp">
    <div onClick={ClickIndex}>Index</div>
    <Link href="/chatpage"><button>Chats!</button></Link>
    <Link href="/Contact"><button>Contact Me!</button></Link>
</div>

export default Index;