import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Title from "./Title";
import "../../main.css";

export default {
  title: "Components/Title",
  component: Title,
  argTypes: {
    font: {
      control: "select",
      options: ["Minecraft Seven", "Minecraft Ten"],
    },
    level: {
      control: "number",
    },
  },
} as Meta;

const Template: StoryFn<{
  font: string;
  level: number;
  children: React.ReactNode;
}> = (args) => <Title {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  level: 1,
  children: "Title",
};
