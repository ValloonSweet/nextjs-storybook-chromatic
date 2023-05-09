import { Meta, StoryObj } from '@storybook/react';
import Button from './index'; //importing the button component

const meta: Meta<typeof Button> = {
    title: "Tailwind/Button",
    component: Button
}

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        size: 'h-10 w-56',
        children: 'Primary Button'
    }
}