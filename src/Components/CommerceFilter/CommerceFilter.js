import React from "react";
import styled from "styled-components";

const DivFilter = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    padding: 10px;

`
const InputValor = styled.input`
    width: 50%;
`
const LabelPadding = styled.label`
    margin-top: 8px;
`
const ButtonTeste = styled.button`
    margin-top: 20px;
    width: 50%;
`
export class CommerceFilter extends React.Component{
    state={
        valorMinimo: 0,
        valorMaximo: 0,
        nomePesquisado: ''
    }
    changeValorMinimo = (event) => {
        this.setState({valorMinimo: event.target.value})
    }
    changeValorMaximo = (event) => {
        this.setState({valorMaximo: event.target.value})
    }
    changePesquisaNome = (event) => {
        this.setState({nomePesquisado: event.target.value})
    }
    imprimirInfos = () => {
        console.log(this.state.valorMinimo)
        console.log(this.state.valorMaximo)
        console.log(this.state.nomePesquisado)
        
    }
    render(){
        return <DivFilter>
            <h3>Filtros</h3>
            <LabelPadding htmlFor='valor-minimo'>Valor mínimo</LabelPadding>
            <InputValor name='valor-minimo' type='number' min='0' value={this.state.valorMinimo} onChange={this.changeValorMinimo}/>

            <LabelPadding htmlFor='valor-maximo'>Valor máximo</LabelPadding>
            <InputValor name='valor-maximo' type='number' min='0' value={this.state.valorMaximo} onChange={this.changeValorMaximo}/> 

            <LabelPadding htmlFor='pesquisa-nome'>Busca por nome</LabelPadding>
            <InputValor name='pesquisa-nome' type='text' value={this.state.nomePesquisado} onChange={this.changePesquisaNome}/>
            <ButtonTeste onClick={this.imprimirInfos}>{this.props.texto}</ButtonTeste>
        </DivFilter>
    }
}
export default CommerceFilter