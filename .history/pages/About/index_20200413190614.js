import './about.css';
import CustomButton from '../../comps/CustomButton';

function ClickBack(){

    document.querySelector(".AboutMe").style.left = "100%";
    setTimeout(function(){
        Router.push("/pages");
    },1000)
}

const About = () => <div className="AboutMe"> 
    <div>This is about me</div>
    <div>I am a young boy from neverland!</div>
    <CustomButton text="This button does nothing cause it's magical" />
</div>

export default About;