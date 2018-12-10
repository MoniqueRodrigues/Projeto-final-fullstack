import React from 'react'
import './QuemSomos.scss'
import Menu from '../../componentes/Menu/Menu'
import Card from '../../componentes/Card/Card'
import Cabecalho from '../../componentes/Cabecalho/Cabecalho'
// import img8 from '../../imagens/img8.jpg'

function QuemSomos(){
    return(
    <div className="quemSomosWrapper">
        
        <Cabecalho textoNormal="Quem" textoColorido="Somos"/>
        {Card(null)}

       
    </div>
    
    )
}
export default QuemSomos