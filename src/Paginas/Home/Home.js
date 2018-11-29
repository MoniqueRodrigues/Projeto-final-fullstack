import React from 'react'
import Menu from '../../componentes/Menu/Menu.js'
import Botao from './../../componentes/Botao/Botao'
import './Home.scss'

function Home() {
  return (
    <div className="home">
      <Menu />
      <h1 className="home__titulo">ABCreches</h1>
      <h2 className="home__subtitulo">A melhor escolha para quem merece o melhor</h2>
      <Botao>Saiba Mais</Botao>
    </div>
  )
}

export default Home
