import React from 'react'

import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu'
import './Menu.css'


class Simple extends React.Component {
  render() {
    return (
      <DropdownMenu>
        <MenuItem text='Home' location='/simple' />
        <MenuItem text='Edit Profile' location='/simple' />
        <MenuItem text='Logout' location='/simple' />
      </DropdownMenu>
    )
  }
}


export default Simple;































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