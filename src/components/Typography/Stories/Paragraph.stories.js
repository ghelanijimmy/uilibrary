import React from "react";
import Paragraph from "../Paragraph";
import { sizes } from "../../../constants/constants";

const { SM, MD, LG, XL } = sizes;

export default {
  title: "Typography/Paragraph/CSF",
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

const ParagraphTemplate = ({
  size,
  children,
  color,
  asSpan,
  displayInline,
  makeInlineBlock,
  makeBlock,
}) => (
  <Paragraph
    size={size}
    color={color}
    asSpan={asSpan}
    displayInline={displayInline}
    makeInlineBlock={makeInlineBlock}
    makeBlock={makeBlock}
  >
    {children}
  </Paragraph>
);

export const DefaultParagraph = ParagraphTemplate.bind({});
DefaultParagraph.args = {
  size: MD,
  color: "",
  asSpan: false,
  displayInline: false,
  makeInlineBlock: false,
  makeBlock: false,
};

export const SmallParagraph = ParagraphTemplate.bind({});
SmallParagraph.args = {
  size: SM,
};

export const MediumParagraph = ParagraphTemplate.bind({});
MediumParagraph.args = {
  size: MD,
};
export const LargeParagraph = ParagraphTemplate.bind({});
LargeParagraph.args = {
  size: LG,
};
export const ExtraLargeParagraph = ParagraphTemplate.bind({});
ExtraLargeParagraph.args = {
  size: XL,
};
