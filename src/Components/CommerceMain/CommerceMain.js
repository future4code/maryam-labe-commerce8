import React from "react";
import styled from "styled-components";
import CommerceFilter from "../CommerceFilter/CommerceFilter";
import CommerceCarrinho from '../CommerceCarrinho/CommerceCarrinho';
import CommerceProdutos from '../CommerceProdutos/CommerceProdutos';

const MainContainer = styled.div`
    width: 100%;
    height: 500px;
    border: 1px solid black;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
`

export class CommerceMain extends React.Component{
    render(){
        return <MainContainer>
            <CommerceFilter></CommerceFilter>
            <CommerceProdutos></CommerceProdutos>

        </MainContainer>
    }
}
export default CommerceMain