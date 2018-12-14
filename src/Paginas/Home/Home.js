import React from 'react'
import Menu from '../../componentes/Menu/Menu.js'
import Botao from './../../componentes/Botao/Botao'
import OQueOferecemos from '../OQueOferecemos/OQueOferecemos'
import Tabela from './../../componentes/Tabela/Tabela'
import Login from '../Login/Login'
import './Home.scss'


function Home() {
  return (
    <div className="home">
    <Menu />
    <div className= "home__imagem">
    <h1 className="home__titulo">EducaCriança</h1>
    <h2 className="home__subtitulo"> A melhor escolha para quem merece o melhor</h2>
    </div>
    <a href ="#oQueOferecemos"><Botao>Saiba Mais</Botao></a>
    
    
    <OQueOferecemos />
    <Tabela />
    
    
    </div>
  )
}

export default Home
