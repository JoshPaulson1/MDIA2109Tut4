import Link from 'next/Link';
import Router from 'next/router';
import './app.css';

function ClickIndex(){
    if(confirm("are you sure?")){
Router.push("/ChatPage");
    }
}

const Index = () => <div id="mainapp">
    <div onClick={ClickIndex}>Index</div>
    <Link href="/chatpage"><button>Chats!</button></Link>
    <Link href="/Contact"><button>Contact Me!</button></Link>
</div>

export default Index;