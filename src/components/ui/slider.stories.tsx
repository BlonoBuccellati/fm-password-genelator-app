import { Meta, StoryObj } from "@storybook/nextjs-vite";

import "@/styles/globals.css";
import { Slider } from "./slider";

const meta = {
  component: Slider,
  title: "ui/Slider",
} satisfies Meta<typeof Slider>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    min: 1,
    max: 100,
  },
};
