import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";
import "../../main.css";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    text: {
      control: "text",
    },
    textColor: {
      control: "select",
      options: ["primary", "secondary"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "#800080"],
    },
    font: {
      control: "select",
      options: ["Minecraft Seven", "Minecraft Ten"],
    },
    disabled: {
      control: "boolean",
    },
    active: {
      control: "boolean",
    },
  },
} as Meta;

const Template: StoryFn<{
  color: string;
  textColor: string;
  font: string;
  disabled?: boolean;
  text?: string;
  active?: boolean;
}> = (args) => <Button {...args}>{args.text}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary Button",
  color: "primary",
  textColor: "primary",
  font: "Minecraft Ten",
  disabled: false,
  active: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Secondary Button",
  color: "secondary",
  textColor: "secondary",
  font: "Minecraft Seven",
  disabled: false,
  active: false,
};
