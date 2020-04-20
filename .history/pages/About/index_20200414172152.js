import {useEffect} from 'react';
import Router from 'next/router';
import './about.css';
import CustomButton from '../../comps/CustomButton';
import {MdInsertEmoticon} from 'react-icons/md';

function ClickBack(){

    document.querySelector("#AboutMe");
    setTimeout(function(){
        Router.push("/");
    },1000)
}

const About = () =>{

    useEffect(() =>{
        setTimeout(() =>{
    document.querySelector('#About').style.bottom = 0;
        },50)
    }, []);
    
return <div id="About"> 
    <div>This is about me <MdInsertEmoticon/></div>
    <div>I am a young boy from neverland!</div>
    <CustomButton text="Go back"  id="AboutMe"  onClick={ClickBack}/>
</div>
}
export default About;