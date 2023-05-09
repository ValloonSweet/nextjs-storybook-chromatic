import { Meta, StoryObj } from "@storybook/react";
import Todo from "./Todo";

const meta: Meta<typeof Todo> = {
    title: 'Tailwind/Todo',
    component: Todo
}

export default meta;

type Story = StoryObj<typeof Todo>;

export const Primary: Story = {
    args: {
        items: [
            {
                index: 0,
                status: false,
                todo: 'This is the first todo'
            },
            {
                index: 1,
                status: true,
                todo: 'This is the first todo'
            },
            {
                index: 2,
                status: false,
                todo: 'This is the third todo'
            },
            {
                index: 3,
                status: true,
                todo: 'This is the first todo'
            },
        ]
    }
}