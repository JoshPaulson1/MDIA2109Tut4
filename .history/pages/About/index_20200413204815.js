import Router from 'next/router';
import './about.css';
import CustomButton from '../../comps/CustomButton';
import {MdInsertEmoticon} from 'react-icons/md';


const About = ({}) => {
    useEffect(() =>{
        setTimeout(() =>{
    document.querySelector('#About').style.left = 0;
        },50)
    }, []);

return<div id="About"> 
    <div>This is about me <MdInsertEmoticon/></div>
    <div>I am a young boy from neverland!</div>
    <CustomButton text="This button goes to chatpage"  id="AboutMe"  onClick={ClickBack}/>
</div>
}
export default About;