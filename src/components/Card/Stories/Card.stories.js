import React from "react";
import Card from "../Card";
import Paragraph from "../../Typography/Paragraph";
import Button from "../../Button/Button";
import { DefaultParagraph } from "../../Typography/Stories/Paragraph.stories";
import { DefaultButton } from "../../Button/Stories/Button.stories";

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

const Template = ({ button, paragraph, ...args }) => (
  <Card {...args}>
    <Paragraph {...paragraph}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias atque
      autem ducimus ea ex hic iste libero quae sint.
    </Paragraph>
    <Button {...button} />
  </Card>
);

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  button: { ...DefaultButton.args },
  paragraph: { ...DefaultParagraph.args },
};
