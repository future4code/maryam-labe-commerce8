import React from 'react';
import CommerceMain  from './Components/CommerceMain/CommerceMain';
import CommerceProdutos from './Components/CommerceProdutos/CommerceProdutos';
import CommerceFilter from './Components/CommerceFilter/CommerceFilter'

class App extends React.Component{
  state={
    valorMinimo: 0,
    valorMaximo: 0,
    nomePesquisado: 'teste props',
    produtos: [{id: '1', titulo: 'Placa de Vídeo', preco: 1500},
      {id: '2', titulo: 'Mouse', preco: 50},
      {id: '3', titulo: 'Teclado', preco: 150},
      {id: '4', titulo: 'Headset', preco: 200}]
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
    return (
      <div className='container'>

        <CommerceMain>
          <CommerceFilter texto={'teste'}/>
          <CommerceProdutos></CommerceProdutos>
          </CommerceMain>
    </div>
    );
  }
}
export default App
