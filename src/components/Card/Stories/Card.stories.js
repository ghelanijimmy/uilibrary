import React from "react";
import Card from "../Card";
import Paragraph from "../../Typography/Paragraph";
import Button from "../../Button/Button";
import { DefaultParagraph } from "../../Typography/Stories/Paragraph.stories";
import { DefaultButton } from "../../Button/Stories/Button.stories";
import { CardInnerWrapperSC } from "../styled-components/CardSC";
import Anchor from "../../Typography/Anchor";
import { DefaultAnchor } from "../../Typography/Stories/Anchor.stories";
import { colorStyles } from "../../../constants/constants";

const { PRIMARY } = colorStyles;

export default {
  title: "Cards/CSF",
  component: Card,
  subcomponents: { Paragraph, Button },
  argTypes: {
    displayFlex: {
      type: "boolean",
      control: "boolean",
      defaultValue: false,
    },
  },
};

const Template = ({ button, paragraph, anchor, ...args }) => (
  <Card {...args}>
    <Paragraph {...paragraph}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias atque
      autem ducimus ea ex hic iste libero quae sint.
    </Paragraph>
    <Anchor {...anchor} />
    <Button {...button} />
  </Card>
);

const MultipleTemplate = ({ button, paragraph, anchor, ...args }) => (
  <Card {...args}>
    <CardInnerWrapperSC>
      <Paragraph {...paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias atque
        autem ducimus ea ex hic iste libero quae sint.
      </Paragraph>
      <Anchor {...anchor} />
      <Button {...button} />
    </CardInnerWrapperSC>
    <CardInnerWrapperSC>
      <Paragraph {...paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias atque
        autem ducimus ea ex hic iste libero quae sint.
      </Paragraph>
      <Anchor {...anchor} />
      <Button {...button} />
    </CardInnerWrapperSC>
  </Card>
);

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  button: { ...DefaultButton.args },
  paragraph: { ...DefaultParagraph.args },
  anchor: { ...DefaultAnchor.args, color: PRIMARY, displayBlock: true },
};

export const MultipleCard = MultipleTemplate.bind({});
MultipleCard.args = {
  anchor: { ...DefaultAnchor.args, color: PRIMARY, displayBlock: true },
};
