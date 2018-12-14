// responsável por renderizar todo o nosso projeto

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Paginas/Home/Home'
// import OQueOferecemos from './Paginas/OQueOferecemos/OQueOferecemos'
// import Tabela from './componentes/Tabela/Tabela'
// import Cabecalho from './componentes/Cabecalho/Cabecalho'
// import Login from './Paginas/Login/Login'
// import Conta from './Paginas/Conta/Conta'
import './index.scss'



function App(){
    return(
        <Switch>
            {/* <Route path = "/home" exact component={Home}/>
            <Route path = "/" exact component={Home}/>
            <Route path ="/oQueOferecemos" component={OQueOferecemos}/>
            <Route path= "/tabela" component ={Tabela}/>
            <Route path="/login" component={Login} />
            <Route path="/conta" component={Conta}/>           */}
        </Switch>
    )
}




ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
      document.getElementById('projeto-final')
)