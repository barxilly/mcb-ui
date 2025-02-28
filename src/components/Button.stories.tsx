import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";
import "./main.css";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    textColor: {
      control: "select",
      options: ["primary", "secondary"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary"],
    },
    font: {
      control: "select",
      options: ["Minecraft Seven", "Minecraft Ten"],
    },
    text: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
} as Meta;

const Template: StoryFn<{
  text: string;
  color: string;
  textColor: string;
  font: string;
  disabled?: boolean;
}> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary Button",
  color: "primary",
  textColor: "primary",
  font: "Minecraft Ten",
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Secondary Button",
  color: "secondary",
  textColor: "secondary",
  font: "Minecraft Seven",
  disabled: false,
};
