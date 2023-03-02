import { useState } from "react";
import styled from "styled-components";
import '../../../styles/font/index.css'

function TodoTitle({length}){

    
    // const countTodo= ()=> {
        
    //     [setCnt]
    // }

    return(
        <S.Wrapper>
            <h2>오늘의 할 일 <span>{length}</span>개</h2>
        </S.Wrapper>
    )
}
export default TodoTitle;


const Wrapper = styled.div`
    margin-bottom: 40px;
        & h2 {
            font-size: 26px;
            font-family: 'Bold';
        }
        & span {
            text-decoration: underline;
        }
`

const S = {
    Wrapper,

}
