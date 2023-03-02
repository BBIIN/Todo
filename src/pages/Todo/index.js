import { useState } from "react";
import styled from "styled-components";
import { flexCenter } from "../../styles/common";
import TodoForm from "./components/Form";
import TodoTitle from "./components/Title";
import TodoList from "./components/todoList";
import '../../styles/font/index.css'

function Todo(){

    const [todoList, setTodoList] = useState([])

    return(
        <S.Wrapper>
            <div>
                <TodoTitle length={todoList.length}/>
                <TodoList todoList={todoList} setTodoList={setTodoList}/>
                <TodoForm todolist={todoList} setTodoList={setTodoList}/>
            </div>
        </S.Wrapper>
    )
}
export default Todo;

const Wrapper = styled.div`
        ${flexCenter};
        height: 100vh;
        & > div {
            
            text-align: center;
            width: 450px;
            height: 500px;
        }
`

const S = {
    Wrapper
}