import { useState } from 'react'
import Layout from './paginas/Layout'


function App() {

  let gato = {
    nome: 'Cleitinho',
    profissao: 'Pet da casa'
  }

  let pessoas = [
    { nome: "João", profissao: "Engenheiro" },
    { nome: "Maria", profissao: "Médica" },
    { nome: "Carlos", profissao: "Professor" }
  ];

  return (
    <>
      <Layout></Layout>
    </>
  )
}

export default App
