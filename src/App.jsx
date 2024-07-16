import { useState } from 'react'
import './App.css'
import Header from '/src/componentes/Header.jsx'
import ListaCartoes from './componentes/ListaCartoes.jsx'
import Botao from '/src/componentes/Botao.jsx'
import TesteEstado from './componentes/TesteEstado.jsx'
import Gato from './componentes/Gato.jsx'

function App() {

  let gato = {
    nome: 'Cleitinho',
    profissao: 'Pet da casa'
  }

  return (
    <>
      
      <Header titulo={gato.nome} subTitulo={gato.profissao}></Header>
      <ListaCartoes></ListaCartoes>
      <Botao></Botao>
      <TesteEstado></TesteEstado>
      <Gato></Gato>

    </>
  )
}

export default App
