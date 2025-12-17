import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "../components/Spinner";
import styled from "styled-components";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large", "x-large"],
    },
    color: {
      control: "color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: "medium",
  },
};

export const Sizes: Story = {
  render: () => (
    <SizesWrapper>
      <SizeRow>
        <SizeLabel>Small (16px)</SizeLabel>
        <Spinner size="small" />
      </SizeRow>
      <SizeRow>
        <SizeLabel>Medium (20px)</SizeLabel>
        <Spinner size="medium" />
      </SizeRow>
      <SizeRow>
        <SizeLabel>Large (24px)</SizeLabel>
        <Spinner size="large" />
      </SizeRow>
      <SizeRow>
        <SizeLabel>X-Large (32px)</SizeLabel>
        <Spinner size="x-large" />
      </SizeRow>
    </SizesWrapper>
  ),
};

export const CustomColor: Story = {
  render: () => (
    <ColorWrapper>
      <Spinner color="#FF5722" />
      <Spinner color="#4CAF50" />
      <Spinner color="#9C27B0" />
    </ColorWrapper>
  ),
};

const SizesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SizeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const SizeLabel = styled.span`
  width: 120px;
  font-size: 14px;
  color: #666;
`;

const ColorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
