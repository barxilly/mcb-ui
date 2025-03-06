import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Switch } from "./Switch";
import "../../main.css";

export default {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    defaultChecked: {
      control: "boolean",
    },
  },
} as Meta;

const Template: StoryFn<{
  defaultChecked?: boolean;
}> = (args) => <Switch {...args}></Switch>;

export const Primary = Template.bind({});
Primary.args = {
  defaultChecked: false,
};
