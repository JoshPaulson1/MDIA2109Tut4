import React from "react";
import CustomButton from "../comps/CustomButton";

export default {
    title:"Custom Button",
    Component:CustomButton
};

export const MyCustomButton = () => <CustomButton />;

export const PageWithCustomButtons = () => <div>
    <CustomButton text="Cancel"/>
    <CustomButton text="OK"/>
    <CustomButton text="Submit"/>
    <CustomButton text="Menu"/>
</div>