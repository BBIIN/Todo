import { useState } from "react";
import styled from "styled-components";
import { flexCenter } from "../../../../styles/common";

function Todo({todo, deleteTodo, editTodoList}){
    const [edit, setEdit] = useState(false)
    const [text, setText] = useState('')

    const onEdit=()=>{
        if(todo.todo === text) return setEdit(false)
        setEdit(false)
    }

    const onChageEdit = (e) => {
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
            <div>
                <button onClick={edit ? onEdit : onChageEdit}>{edit ? '확인' : '수정'}</button>
                <button onClick={onDelete}>삭제</button>
            </div>
        </S.wrapper>
    )
}

export default Todo


const wrapper = styled.div`
width: 200px;
margin: 0 auto;
    display: flex;
    justify-content: space-between;
`

const S = {
    wrapper
}