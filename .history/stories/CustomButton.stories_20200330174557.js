import React from "react";
import CustomButton from "../comps/CustomButton";

export default {
    title:"Custom Button",
    Component:CustomButton
};

export const MyCustomButton = () => <CustomButton />;

export const PageWithCustomButtons = () => <div>
    <CustomButton
    color="#999"
    text="Cancel"
    OnClick={CancelClick}
    />
    <CustomButton 
    color="#3F5"
    text="OK"
    OnClick={OKClick}
    />
    <CustomButton 
    color="#F3F"
    text="Submit"/>
    <CustomButton
    text="Menu"/>
</div>

function CancelClick(){
    alert("cancel");
}

function OKClick(){
    alert("OK");
}