import Router from 'next/router';
import './about.css';
import CustomButton from '../../comps/CustomButton';

function ClickBack(){

    document.querySelector("#AboutMe");
    setTimeout(function(){
        Router.push("/Contact");
    },1000)
}

const About = () => <div> 
    <div>This is about me</div>
    <div>I am a young boy from neverland!</div>
    <CustomButton text="This button does nothing cause it's magical"  id="AboutMe"  onClick={ClickBack}/>
</div>

export default About;