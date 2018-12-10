// responsável por renderizar todo o nosso projeto

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Paginas/Home/Home'
import QuemSomos from './Paginas/QuemSomos/QuemSomos'
import Tabela from './componentes/Tabela/Tabela'
import Cabecalho from './componentes/Cabecalho/Cabecalho'
import './index.scss'



function App(){
    return(

        <switch>

            <Route path = "/home" component = {Home}/>
            <Route path ="/quemsomos" component ={QuemSomos}/>
            <Route path= "/tabela" component ={Tabela}/>
            
          

        </switch>
    )

}




ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
      document.getElementById('projeto-final')

)   