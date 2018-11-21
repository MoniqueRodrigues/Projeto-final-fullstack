// responsável por renderizar todo o nosso projeto

import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import Botao from './componentes/Botao/Botao'
import Home from './Paginas/Home/Home'
import Menu from './componentes/Menu/Menu'

const projetoFinal = document.getElementById('projeto-final')
//const menuLateral = document.getElementById('menu-lateral')



ReactDom.render(<Botao nome="Saiba mais"></Botao>,projetoFinal)
ReactDOM.render(<DropdownMenu></DropdownMenu>,projetoFinal)
ReactDom.render(<Home titulo="Crianças Na Creche" subtitulo= "A melhor escolha para quem merece o melhor"></Home>,projetoFinal)


