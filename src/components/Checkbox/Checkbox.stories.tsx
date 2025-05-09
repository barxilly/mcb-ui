import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Checkbox from "./Checkbox";
import "../../main.css";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    label: {
      control: "text",
    },
  },
} as Meta;

const Template: StoryFn<{
  label?: string;
}> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Checkbox",
};
