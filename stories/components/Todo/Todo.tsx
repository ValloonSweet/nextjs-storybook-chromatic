import React from "react";
import TodoItem, { TodoItemProps } from "./TodoItem"

type Props = {
    items: TodoItemProps[]
}

const Todo = ({items: _items}: Props) => {
    const [items, setItems] = React.useState<TodoItemProps[]>(_items);

    const changeStatus = (index: number, status: boolean) => {
        const __items = items.map(item => {
            if(item.index === index) item.status = status;
            return item;
        })
        setItems(__items);
    }

    return (
        <ul>
            {items.length > 0 && items.map((item, i) => <TodoItem {...item} changeStatus={changeStatus} />)}
        </ul>
    )
}

export default Todo;