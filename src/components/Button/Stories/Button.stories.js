import React from "react";
import Button from "../Button";
import { colorStyles, sizes } from "../../../constants/constants";

const { PRIMARY, SECONDARY, DEFAULT } = colorStyles;
const { SM, MD, LG, XL } = sizes;

export default {
  title: "Button/CSF",
  argTypes: {
    text: {
      type: "string",
      control: "text",
      description: "Text inside constants",
      defaultValue: "Default Button Text",
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
    asAnchor: {
      type: "boolean",
      control: "boolean",
      defaultValue: false,
    },
    link: {
      type: "string",
      control: "text",
      defaultValue: "",
    },
    inverse: {
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

const Template = ({
  text,
  type,
  size,
  isFullWidth,
  asAnchor,
  link,
  inverse,
}) => (
  <Button
    text={text}
    type={type}
    size={size}
    isFullWidth={isFullWidth}
    asAnchor={asAnchor}
    link={link}
    inverse={inverse}
  />
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
