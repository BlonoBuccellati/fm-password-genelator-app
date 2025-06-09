import { Meta, StoryObj } from "@storybook/nextjs-vite";
import "@/styles/globals.css";

import { Checkbox } from "./checkbox";

const meta = {
  component: Checkbox,
  title: "ui/Checkbokx",
} satisfies Meta<typeof Checkbox>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
  args: {
    hasAnimation: false,
    checked: true,
  },
};
