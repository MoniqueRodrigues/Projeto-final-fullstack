// responsável por renderizar todo o nosso projeto

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Paginas/Home/Home'
import QuemSomos from './Paginas/QuemSomos/QuemSomos'
import './index.scss'



function App(){
    return(

        <switch>
            <Route path = "/home" component = {Home}/>
            <Route path ="/quemsomos" component ={QuemSomos}/>
          

        </switch>
    )

}




ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
      document.getElementById('projeto-final')

)   