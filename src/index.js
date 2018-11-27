// responsável por renderizar todo o nosso projeto

import React from 'react'
import ReactDom from 'react-dom'
import Botao from './componentes/Botao/Botao'
import Home from './Paginas/Home/Home'
import Menu from './componentes/Menu/Menu'
import './index.css'


const projetoFinal = document.getElementById('projeto-final')





//ReactDom.render(<Menu></Menu>,projetoFinal)
ReactDom.render(<Home titulo="ABCreches" subtitulo= "A melhor escolha para quem merece o melhor"></Home>,projetoFinal)
//ReactDom.render(<Botao nome= "Saiba Mais"></Botao>,projetoFinal)


