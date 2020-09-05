import React from "react";
import Button from "../components/Button";
import { buttonTypes, sizes } from "../constants/constants";

const { PRIMARY, SECONDARY, DEFAULT } = buttonTypes;
const { SM, MD, LG, XL } = sizes;

export default {
  title: "Button/CSF",
  argTypes: {
    text: {
      type: "string",
      control: "text",
      description: "Text inside constants",
      defaultValue: "Default Text",
    },
    type: {
      type: "enum",
      defaultValue: DEFAULT,
      control: {
        type: "inline-radio",
        options: [PRIMARY, SECONDARY, DEFAULT],
      },
    },
    size: {
      type: "enum",
      defaultValue: MD,
      control: {
        type: "inline-radio",
        options: [SM, MD, LG, XL],
      },
    },
    isFullWidth: {
      type: "boolean",
      control: "boolean",
      defaultValue: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: "# Button",
      },
    },
  },
};

const Template = ({ text, type, size, isFullWidth }) => (
  <Button text={text} type={type} size={size} isFullWidth={isFullWidth} />
);

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    description: {
      story: "Default Button",
    },
  },
};

export const Primary = Template.bind({});
Primary.args = {
  type: PRIMARY,
};
Primary.parameters = {
  docs: {
    description: {
      story: "# Primary Button Description\n###More markdown",
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: SECONDARY,
};
Secondary.parameters = {
  docs: {
    description: {
      story: "# Secondary Button Description\n###More markdown",
    },
  },
};
