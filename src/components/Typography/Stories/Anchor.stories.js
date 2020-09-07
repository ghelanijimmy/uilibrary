import React from "react";
import Anchor from "../Anchor";
import { sizes } from "../../../constants/constants";

const { SM, MD, LG, XL } = sizes;

export default {
  title: "Typography/Anchor/CSF",
  component: Anchor,
  argTypes: {
    size: {
      type: "enum",
      control: {
        type: "inline-radio",
        options: [SM, MD, LG, XL],
      },
      defaultValue: MD,
    },
    children: {
      type: "string",
      control: "text",
      defaultValue: "Default Text",
    },
    color: {
      type: "string",
      control: "color",
      defaultValue: "",
    },
    displayInline: {
      type: "boolean",
      control: "boolean",
      defaultValue: false,
    },
    makeInlineBlock: {
      type: "boolean",
      control: "boolean",
      defaultValue: false,
    },
    hrefLink: {
      type: "string",
      control: "text",
      defaultValue: "",
    },
    hrefTarget: {
      type: "enum",
      control: {
        type: "inline-radio",
        options: ["_blank", "_self", "_parent", "_top"],
      },
      defaultValue: "_blank",
    },
  },
};

const AnchorTemplate = ({
  size,
  children,
  color,
  displayInline,
  makeInlineBlock,
  hrefLink,
  hrefTarget,
}) => (
  <Anchor
    size={size}
    color={color}
    displayInline={displayInline}
    makeInlineBlock={makeInlineBlock}
    hrefLink={hrefLink}
    hrefTarget={hrefTarget}
  >
    {children}
  </Anchor>
);

export const DefaultAnchor = AnchorTemplate.bind({});
export const SmallAnchor = AnchorTemplate.bind({});
SmallAnchor.args = {
  size: SM,
};
export const MediumAnchor = AnchorTemplate.bind({});
MediumAnchor.args = {
  size: MD,
};
export const LargeAnchor = AnchorTemplate.bind({});
LargeAnchor.args = {
  size: LG,
};
export const ExtraLargeAnchor = AnchorTemplate.bind({});
ExtraLargeAnchor.args = {
  size: XL,
};
