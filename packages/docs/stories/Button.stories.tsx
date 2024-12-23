import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@your-org/ui';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'contained',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'outlined',
    children: 'Secondary Button',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Text Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'contained',
    children: 'Disabled Button',
    disabled: true,
  },
}; 