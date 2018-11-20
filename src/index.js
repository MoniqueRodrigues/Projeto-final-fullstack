// responsável por renderizar todo o nosso projeto

import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import Botao from './componentes/Botao/Botao'
import Menu from './componentes/Menu/Menu'






const projetoFinal = document.getElementById('projeto-final')
const menuLateral = document.getElementById('menu-lateral')

ReactDom.render(<Botao nome="Saiba mais"></Botao>,projetoFinal)
ReactDom.render(<Menu></Menu>, menuLateral)

