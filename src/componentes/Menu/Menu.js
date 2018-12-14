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
      <a href="home"><div className="link">Home</div></a>
      <a href="oQueOferecemos"><div className="link">O que oferecemos</div></a>
      <a href="/login"><div className="link">Login</div></a>
      <a href="tabela"><div className="link">Busca Creche</div></a>
    </nav>
  </div>
</div>



  )
}
  
  export default Menu; 






