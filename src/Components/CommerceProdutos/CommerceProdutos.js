import React from "react";
import styled from "styled-components";
import CommerceFilter from "../CommerceFilter/CommerceFilter";

const CardProduto = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid green;
    padding: 10px;
`
const Produtos = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    padding: 10px;
`
export class CommerceProdutos extends React.Component{
    state ={
        produtos: [{id: '1', titulo: 'Placa de Vídeo', preco: 1500},
        {id: '2', titulo: 'Mouse', preco: 50},
        {id: '3', titulo: 'Teclado', preco: 150},
        {id: '4', titulo: 'Headset', preco: 200}]
    }
    mostraProduto = () => {
        return this.state.produtos
        .map( (produto) => {
            return <CardProduto key={produto}>
                <h3>{produto.titulo}</h3>
                <p>Preço: R${produto.preco}</p>
            </CardProduto>
        })
    }
    render(){
        return <Produtos>
            {this.mostraProduto()}
        </Produtos>
    }
}
export default CommerceProdutos