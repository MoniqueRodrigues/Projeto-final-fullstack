import React from 'react'
import icone from './hamburguer.png'
import './Menu.css'



class Menu extends React.Component {
  render() {
    return (
      <div>
        <input type="checkbox" id="check" />
        <label id="icone" for="check"><img src={icone}alt=""/></label>
        <div class="barra">
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