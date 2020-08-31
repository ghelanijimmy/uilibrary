import React from "react";
import Button from "../components/Button";

export default {
	title: "Button/JS"
}

const Template = ({text}) => <Button text={text} />;

export const Default = Template.bind({});
Default.args = {
	text: "Default Text"
}