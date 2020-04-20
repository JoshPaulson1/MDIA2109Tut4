import React from "react";
import CustomButton from "../comps/CustomButton";
import Header from '../comps/Header';

export default {
    title:"Custom Button",
    Component:CustomButton
};

export const MyCustomButton = () => <CustomButton />;

export const PageWithCustomButtons = () => <div>
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

export const PageWithHeaders = () => <div>
<Header
    fontSize={15}
    color=""
    onMouseOver={CancelClick}
    />

    <Header
    color="#999"
    text="Cancel"
    onMouseOver={CancelClick}
    />
</div>
function CancelClick(){
    alert("cancel");
}

function OKClick(){
    alert("OK");
}