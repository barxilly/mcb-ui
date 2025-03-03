import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Card from "./Card";
import Title from "../Title";
import "../../main.css";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {},
} as Meta;

const Template: StoryFn<{}> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  shadow: "sm",
  children: <Title level={3}>Card content</Title>,
};
