import React from 'react'
import './QuemSomos.scss'
import Menu from '../../componentes/Menu/Menu'
import Card from '../../componentes/Card/Card'
import img8 from '../../imagens/img8.jpg'
function QuemSomos(){
    return(
    <div className="quemSomosWrapper">
        <Menu />
        <div className="cabecalho">
            <h3>Quem <span>Somos</span></h3>
            <div className= 'border'></div>
        </div>
       
    </div>
    
    )
}
export default QuemSomos