import { useState } from 'react'
import './App.css'
import Teste from '../components/Teste'
import Classe from '../components/Classe'
import PropsExemplo from '../components/PropsExemplo'

function App() {

  return (
    <>
      <h1>Joao fodao</h1>
      <Teste/>
      <Classe/>
      <PropsExemplo nome = 'Pedro' idade={23} />
    </>
  )
}

export default App
