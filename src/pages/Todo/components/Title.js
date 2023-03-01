import { useState } from "react";
import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../../../styles/common";

function TodoTitle({length}){

    const [cnt, setCnt] = useState(0);
    
    // const countTodo= ()=> {
        
    //     [setCnt]
    // }

    return(
        <S.Wrapper>
            <p>오늘의 할 일 <span>{length}</span>개</p>
        </S.Wrapper>
    )
}
export default TodoTitle;


const Wrapper = styled.div`
    margin-bottom: 20px;
        & span {
            text-decoration: underline;
        }
`

const S = {
    Wrapper,

}
