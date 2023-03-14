import type { Meta, StoryObj } from '@storybook/react'

import { Heading } from './Heading'

const meta = {
  title: 'Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Hello World',
  },
}
