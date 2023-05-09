import { ChangeEvent } from "react"

export type TodoItemProps = {
    index: number // for checkbox
    status: boolean // false: to do, true: done
    todo: string
    changeStatus?: (index: number, status: boolean) => void
}

const TodoItem = ({status, todo, index, changeStatus}: TodoItemProps) => {
    const lineDec = status ? 'line-through' : '';

    const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
        if(changeStatus)
            changeStatus(index, e.target.checked);
    }
    return (
        <li>
            <input 
                type="checkbox" 
                id={`todo-${index}`} 
                className="me-2" 
                checked={status}
                onChange={onChangeChecked}
            />
            <label htmlFor={`todo-${index}`} className={lineDec}>{todo}</label>
        </li>
    )
}

export default TodoItem;