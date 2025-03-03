import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Input from "./Input";
import "../../main.css";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    placeholder: {
      control: "text",
    },
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
  placeholder?: string;
  active?: boolean;
}> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "Primary Input",
  color: "primary",
  textColor: "primary",
  font: "Minecraft Ten",
  disabled: false,
  active: false,
};
