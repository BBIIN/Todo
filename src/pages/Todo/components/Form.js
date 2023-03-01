import { useState } from "react"

function TodoForm({todolist, setTodoList}){

    const [todo, setTodo] = useState('');

    const onChangeTodo = (e) => {
        setTodo(e.target.value)
    }

    const onAddTodoList = () => {

        let id;
        if(todolist.length > 0){
            id = todolist[todolist.length - 1].id + 1;
        }else{
            id = 1;
        }
        // console.log(todolist)
        setTodoList([...todolist, {id, todo}])
        setTodo('') 
    }

    return (
        <div>
            <input placeholder="할 일을 작성하세요" value={todo} onChange={onChangeTodo}/>
            <button onClick={onAddTodoList}>+</button>
        </div>
        )
}

export default TodoForm