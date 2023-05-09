import { Meta, StoryObj } from "@storybook/react";
import TodoItem from "./TodoItem";

const meta: Meta<typeof TodoItem> = {
    title: 'Tailwind/TodoItem',
    component: TodoItem
}

export default meta;

type Story = StoryObj<typeof TodoItem>;

export const Todo: Story = {
    args: {
        index: 0,
        status: false,
        todo: 'This is the test todo'
    }
}