import type { Meta, StoryObj } from '@storybook/react'

import { Text } from './Text'

const meta = {
  title: 'Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Hello World',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Hello World',
    size: '4xl',
  },
}

export const B: Story = {
  args: {
    children: 'Hello World',
    size: '2xl',
    className: 'bg-green-500 text-bold',
  },
}
