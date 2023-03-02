import { useState } from "react";
import styled from "styled-components";

function Todo({todo, deleteTodo, editTodoList}){
    const [edit, setEdit] = useState(false)
    const [text, setText] = useState('')

    const onEdit=()=>{
        if(todo.todo === text) return setEdit(false)
        editTodoList(todo.id, text)
        setEdit(false)
    }

    const onChageEdit = () => {
        setEdit(true)
    }

    const onDelete = () => {
        deleteTodo(todo.id)
    }

    const onChangeTodo= (e) => {
        setText(e.target.value)
    }
    return(
        <S.wrapper>
            {edit ? <textarea value={text} onChange={onChangeTodo}></textarea> : <div>{todo.todo}</div>}
            <S.btn>
                <button onClick={edit ? onEdit : onChageEdit}>{edit ? '확인' : 'Edit'}</button>
                <button onClick={onDelete}>Del</button>
            </S.btn>
        </S.wrapper>
    )
}

export default Todo


const wrapper = styled.div`
    width: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
    & > textarea {
        resize: none;
        height: 32px;
        line-height: 30px;
        padding: 0;
        font-size: 18px;
        vertical-align: middle;
    }
    
`

const btn = styled.div`
    width: 90px;
    & button {
        cursor: pointer;
        height: 20px;
    }
    & button:first-child {
        margin-right: 10px;
    }
`

const S = {
    wrapper,
    btn
}