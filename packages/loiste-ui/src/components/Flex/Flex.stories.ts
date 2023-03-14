import type { Meta, StoryObj } from '@storybook/react'

import { Flex } from './Flex'

const meta = {
  title: 'Flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Flex>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Hello World',
  },
}
