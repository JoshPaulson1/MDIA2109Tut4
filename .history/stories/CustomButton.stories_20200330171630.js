import React, { Component } from "react";
import CustomButton from "../comps/CustomButton";

export default {
    title:"Custom Button",
    Component:CustomButton
};

export const MyCustomButton = () => <CustomButton />;

export const PageWithCustomButtons = () => <div>
    <CustomButton />
    <CustomButton />
</div>