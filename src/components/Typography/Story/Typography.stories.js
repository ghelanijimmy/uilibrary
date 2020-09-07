import React from "react";
import Paragraph from "../Paragraph";
import { sizes } from "../../../constants/constants";

const { SM, MD, LG, XL } = sizes;

export default {
  title: "Typography/CSF",
  component: Paragraph,
  argTypes: {
    size: {
      type: "enum",
      control: {
        type: "inline-radio",
        options: [SM, MD, LG, XL],
      },
      defaultValue: "",
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
    asSpan: {
      type: "boolean",
      control: "boolean",
      defaultValue: false,
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
    makeBlock: {
      type: "boolean",
      control: "boolean",
      defaultValue: false,
    },
  },
};

const TypographyTemplate = ({
  size,
  children,
  color,
  asSpan,
  displayInline,
  makeInlineBlock,
}) => (
  <Paragraph
    size={size}
    color={color}
    asSpan={asSpan}
    displayInline={displayInline}
    makeInlineBlock={makeInlineBlock}
  >
    {children}
  </Paragraph>
);

export const DefaultParagraph = TypographyTemplate.bind({});

export const SmallParagraph = TypographyTemplate.bind({});
SmallParagraph.args = {
  size: SM,
};

export const MediumParagraph = TypographyTemplate.bind({});
MediumParagraph.args = {
  size: MD,
};
export const LargeParagraph = TypographyTemplate.bind({});
LargeParagraph.args = {
  size: LG,
};
export const ExtraLargeParagraph = TypographyTemplate.bind({});
ExtraLargeParagraph.args = {
  size: XL,
};
