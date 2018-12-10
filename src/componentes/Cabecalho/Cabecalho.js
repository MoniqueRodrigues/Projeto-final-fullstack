import React from 'react'
import './Cabecalho.scss'





function Cabecalho(props){
    return(
    
        <div className="cabecalho">
       
           <h3>{props.textoNormal} <span>{props.textoColorido}</span></h3>
            <div className= 'border'></div>
                 
        </div>
       
      

    
    )
}
export default Cabecalho