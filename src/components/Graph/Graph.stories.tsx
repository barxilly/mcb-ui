import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Graph from "./Graph";
import "../../main.css";

export default {
  title: "Components/Graph",
  component: Graph,
  argTypes: {
    options: {
      control: "object",
    },
    data: {
      control: "object",
    },
    w: {
      control: "text",
      label: "Width",
    },
    h: {
      control: "text",
      label: "Height",
    },
    p: {
      control: "text",
      label: "Padding",
    },
  },
} as Meta;

const Template: StoryFn<{
  options: any;
  data: any;
  w?: string;
  h?: string;
  p?: string;
}> = (args) => <Graph {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "# of Points",
        data: [7, 11, 5, 8, 3, 7],
        fill: false,
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgba(54, 162, 235, 0.2)",
      },
    ],
  },
  w: "80%",
  h: "100%",
  p: "100",
};
