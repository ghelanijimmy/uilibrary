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
    handleClick: {
      action: "handleClick called",
    },
    displayBlock: {
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
  handleClick,
  displayBlock,
}) => (
  <Button
    text={text}
    type={type}
    size={size}
    isFullWidth={isFullWidth}
    asAnchor={asAnchor}
    link={link}
    inverse={inverse}
    handleClick={handleClick}
    displayBlock={displayBlock}
  />
);

export const DefaultButton = Template.bind({});
DefaultButton.parameters = {
  docs: {
    description: {
      story: "Default Button",
    },
  },
};
DefaultButton.args = {
  text: "Default Button",
  type: PRIMARY,
  size: MD,
  isFullWidth: false,
  asAnchor: false,
  link: "",
  inverse: false,
  displayBlock: false,
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  type: PRIMARY,
};
PrimaryButton.parameters = {
  docs: {
    description: {
      story: "# Primary Button Description\n###More markdown",
    },
  },
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  type: SECONDARY,
};
SecondaryButton.parameters = {
  docs: {
    description: {
      story: "# Secondary Button Description\n###More markdown",
    },
  },
};
