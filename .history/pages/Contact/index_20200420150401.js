import {useState, useEffect} from 'react';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import './contact.css';

var index = 0;
const headers_arr = [
    "thanks for contacting me!",
    "goodbye",
    "let me know if you have questions"
]

const Contact = () => {
//step 1 - create the state variable and the function to update it, and put a default inside
    const [header_text, setHeader] = useState("contact me!");
    const [pageleft, setleft] = useState('-100%');

    useEffect(() =>{
        //what to do when its created/born in the life cycle
        setTimeout(() =>{
    setleft(0);
        },50)
    }, []);

    useEffect(() =>{
    alert("hi! header text has changed")
    },[header_text]);
    //step2 - connect the state variable to the UI
return<div id="contactpage" style={{left:pageleft}}>
    <Header text={header_text} fontSize={24} />
    <CustomButton text="email" onClick={()=>{
        //step3 - connect the state function() to an interaction/ figure out when you want to update the interface
        setHeader(headers_arr[index]);
        index++;
        if(index > headers_arr.length-1){
            index = 0;
        }
        //setleft("100%");
    }}/>
</div>
}
export default Contact;