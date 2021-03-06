import Router from 'next/router';
import './about.css';
import CustomButton from '../../comps/CustomButton';
import {MdInsertEmoticon} from 'react-icons/md';

function ClickAbout(){

    document.querySelector("#mainapp").style.left = 0;
    setTimeout(function(){
        Router.push("/ChatPage");
    },1000)
}

const About = () => <div className="About"> 
    <div>This is about me <MdInsertEmoticon/></div>
    <div>I am a young boy from neverland!</div>
    <CustomButton text="This button goes to chatpage"  id="AboutMe"  onClick={ClickAbout}/>
</div>

export default About;