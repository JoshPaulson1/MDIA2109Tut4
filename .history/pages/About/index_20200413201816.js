import {useEffect} from 'react';
import Router from 'next/router';
import './about.css';
import CustomButton from '../../comps/CustomButton';

function ClickBack(){

    document.querySelector("#AboutMe");
    setTimeout(function(){
        Router.push("/ChatPage");
    },1000)
}

const About = () => {

    useEffect(() =>{
        setTimeout(() =>{
    document.querySelector('.Aboutpage').style.left = 0;
        },50)
    }, []);

    
return<div className="Aboutpage"> 
    <div>This is about me</div>
    <div>I am a young boy from neverland!</div>
    <CustomButton text="This button goes to chatpage"  id="AboutMe"  onClick={ClickBack}/>
</div>

export default About;