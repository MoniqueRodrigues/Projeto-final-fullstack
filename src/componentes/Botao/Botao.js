import React from 'react'
import './Botao.scss'

function Botao(props) {
  return (
    <button className="botao">
      {props.children}
    </button>
  )
}

export default Botao