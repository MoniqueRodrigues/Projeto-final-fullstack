import React from 'react'
import icone from './hamburguer.png'
import './Menu.scss'


function Menu(){
  
    return(
      <div className= "menu">
        <input type="checkbox" id="check"/>
        <label id="icone" for= "check"><img src ={icone} alt =""/></label>
        <div className="barra">
          <nav>
            <a href=""><div className="link">Home</div></a>
            <a href=""><div className="link">Você Sabia?</div></a>
            <a href=""><div className="link">Quizz</div></a>
            <a href=""><div className="link">Busca Escola</div></a>
          </nav>
        </div>
      </div>
    )
  }
export default Menu;