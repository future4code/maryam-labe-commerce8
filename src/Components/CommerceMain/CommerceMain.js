import React from "react";
import styled from "styled-components";
import CommerceFilter from "../CommerceFilter/CommerceFilter";

const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    padding: 20px;
    gap: 10px;
    border: 1px solid black;
    width: 96.9vw;
    height: 70vh;
`
export class CommerceMain extends React.Component{
    render(){
        return <MainContainer>
            <CommerceFilter></CommerceFilter>
        </MainContainer>
    }
}
export default CommerceMain