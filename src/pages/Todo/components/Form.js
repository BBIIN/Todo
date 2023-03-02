import { useState } from "react"
import styled from "styled-components";

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
        <S.Wrapper>
            <input placeholder="할 일을 작성하세요" value={todo} onChange={onChangeTodo}/>
            <button onClick={onAddTodoList}>+</button>
        </S.Wrapper>
        )
}

export default TodoForm

const Wrapper = styled.div`

    & input {
        width: 300px;
        height: 50px;
        border: none;
        border-bottom: 1px solid #000;
        outline: none;
        font-size: 16px;
    }
    

    & button {
        background: none;
        font-size: 24px;
        margin-left: 20px;
        cursor: pointer;
    }
`

const S = {
    Wrapper
}