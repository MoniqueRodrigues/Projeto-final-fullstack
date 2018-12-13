import React from 'react'
import './OQueOferecemos.scss'
import Menu from '../../componentes/Menu/Menu'
import Card from '../../componentes/Card/Card'
import Cabecalho from '../../componentes/Cabecalho/Cabecalho'
// import img8 from '../../imagens/img8.jpg'

function OQueOferecemos(){
    return(
    
    <div id="oQueOferecemos">    
      
        <div className="oQueOferecemosWrapper">
                <Cabecalho textoNormal="O que" textoColorido="Oferecemos"/>
                {Card(null)}
              
        </div>
    </div>
    
    )
}
export default OQueOferecemos