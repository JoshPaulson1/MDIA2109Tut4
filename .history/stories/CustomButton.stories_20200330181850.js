import React from "react";
import CustomButton from "../comps/CustomButton";
import Header from '../comps/Header';

export default {
    title:"Custom Button",
    Component:CustomButton
};

export const MyCustomButton = () => <CustomButton />;
export const MyCustomHeader = () => <Header />;

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


//headers
export const PageWithHeaders = () => <div>
<Header
    fontSize={24}
    color="red"
    onMouseOver={CancelClick}
    />

    <Header
    fontSize={20}
    color="#DAD"
    onMouseOver={CancelClick}
    />

<Header
    fontSize={16}
    color="pink"
    onMouseOver={CancelClick}
    />
    <Header
    />
</div>


function CancelClick(){
    alert("cancel");
}

function OKClick(){
    alert("OK");
}