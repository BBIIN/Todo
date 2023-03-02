import styled from "styled-components"
import Todo from "./todo/todo"
import '../../../styles/font/index.css'

function TodoList({todoList, setTodoList}){

    const deleteTodo = (id) => {
        const newTodo = todoList.filter((todo) => todo.id !== id)
        setTodoList(newTodo)

    }

    const editTodoList = (id, todo) => {
        const newTodo = [...todoList];
        const selectTodo = newTodo.find((todo) => todo.id === id)
        selectTodo.todo = todo;
        setTodoList(newTodo)
    }


    return(
        <S.Wrapper>
            {todoList.map((todo)=> {
                return <Todo todo={todo} deleteTodo={deleteTodo} editTodoList={editTodoList}/>
            })}
            
        </S.Wrapper>
    )
}
export default TodoList

const Wrapper = styled.div`
    line-height: 35px;
    width: 430px;
    height: 450px;
    font-family: 'Regular';
    font-size: 18px;
    overflow-y:auto;
    margin-bottom: 25px;
`


const S ={
    Wrapper,
}