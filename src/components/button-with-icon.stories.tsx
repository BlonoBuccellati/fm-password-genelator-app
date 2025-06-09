import { Meta, StoryObj } from "@storybook/nextjs-vite";

import "@/styles/globals.css";
import IconArrowRight from "@/assets/images/icon-arrow-right.svg";

import ButtonWithIcon from "./button-with-icon";

const meta = {
  component: ButtonWithIcon,
  title: "ui/ButtonWithIcon",
} satisfies Meta<typeof ButtonWithIcon>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
  render: () => (
    <div className="max-w-2xs">
      <ButtonWithIcon icon={IconArrowRight}>test</ButtonWithIcon>
    </div>
  ),
};
