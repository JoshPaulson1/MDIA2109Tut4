import React from "react";
import CustomButton from "../comps/CustomButton";
import Header from '../comps/Header';
import Input from '../comps/Input';
import Chat from '../comps/Chat';

export default {
    title:"Custom Button",
    Component:CustomButton
};

export const MyCustomButton = () => <CustomButton />;
export const MyCustomHeader = () => <Header />;
export const MyInput = () => <Input />;
export const MyChat = () => <Chat />;

/*export const PageWithCustomButtons = () => <div>
    <CustomButton 
    color="#3F5"
    text="OK"
    onClick={OKClick}
    />
    <CustomButton 
    color="#F3F"
    text="Submit"/>
    <CustomButton
    text="Menu"/>
</div>


//headers
export const PageWithHeaders = () => <div>
<Header
    fontSize={24}
    color="red"
    onMouseOver={ RedHover}
    />

    <Header
    fontSize={20}
    color="#DAD"
    onMouseOver={ PurpleHover}
    />

<Header
    fontSize={16}
    color="pink"
    onMouseOver={ PinkHover}
    />
    <Header
    />
</div>



function OKClick(){
    alert("OK");
}

function RedHover(){
    alert("TEAM RED");
}

function  PurpleHover(){
    alert("TEAM purple");
}

function PinkHover(){
    alert("TEAM pink");
}