import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ButtonGroup from "./ButtonGroup";
import "../../main.css";

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  argTypes: {
    text: {
      control: "text",
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
}> = (args) => <ButtonGroup {...args}>{args.text}</ButtonGroup>;

export const ButtonGroups = Template.bind({});
