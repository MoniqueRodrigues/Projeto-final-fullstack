import React from 'react'
import icone from './hamburguer.png'
import './Menu.scss'

function Menu() {
  return (
    <div>
      <input type="checkbox" id="check" />
      <label id="icone" for="check"><img src={icone} alt="" /></label>
      <div class="barra">
        <nav>
          <a className="link" href="/">Home</a>
          <a className="link" href="/">Você Sabia?</a>
          <a className="link" href="/">Quizz</a>
          <a className="link" href="/">Busca Escola</a>
        </nav>
      </div>
    </div>
  )
}

export default Menu;

// class Menu extends React.Component {
//     render() {
//         return (   
//              <div className="menu-botao btn-group dropleft"> 
//                  <button type="button" className="botao-menu  btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                  Menu
//                  </button>
//                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
//                      <a className="dropdown-item"  href="#">Home</a>
//                      <a className="dropdown-item"  href="#">Você sabia?</a>
//                      <a className="dropdown-item"  href="#">Busque a creche</a>
//                  </div>
//              </div>
//         )
//     }
// }

// export default Menu