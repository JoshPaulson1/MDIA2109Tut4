import Link from 'next/link';
import Router from 'next/router';
import {FaSearchDollar} from 'react-icons/fa';
import {MdGolfCourse} from 'react-icons/md';
import './index.css';
function ClickIndex(){

    document.querySelector("#mainapp").style.left = "100%";
    setTimeout(function(){
        Router.push("/About");
    },1000)
}

const Index = () => <div id="mainapp">
    <div onClick={ClickIndex}>Index</div>
    <FaSearchDollar />
    <Link href="/ChatPage"><button>Chats!</button></Link>
    <Link href="/Contact"><button>Contact Me!</button></Link>
    <Link href="/About"><button> <MdGolfCourse color="#DAB" /> About me!</button></Link>
</div>

export default Index;