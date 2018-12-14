import React from 'react'
import './Botao.scss'

function Botao(props) {

  
  return (
    
    <button className="botao" onClick={props.onClick}>
      {props.children}
    </button>
    
  )
}

export default Botao