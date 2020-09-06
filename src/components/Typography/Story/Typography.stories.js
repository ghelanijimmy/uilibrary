import React from "react";
import Typography from "../Typography";

export default {
  title: "Typography/CSF",
  component: Typography,
};

const TypographyTemplate = (args) => (
  <Typography {...args}>Default Text</Typography>
);

export const DefaultParagraph = TypographyTemplate.bind({});
