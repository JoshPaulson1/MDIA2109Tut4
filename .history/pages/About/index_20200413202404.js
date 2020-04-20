import Router from 'next/router';
import './about.css';
import CustomButton from '../../comps/CustomButton';

function ClickBack(){

    document.querySelector("#mainapp").style.right= "-100%";
    setTimeout(function(){
        Router.push("/ChatPage");
    },1000)
}

const About = () => <div className="About"> 
    <div>This is about me</div>
    <div>I am a young boy from neverland!</div>
    <CustomButton text="This button goes to chatpage"  id="AboutMe"  onClick={ClickBack}/>
</div>

export default About;