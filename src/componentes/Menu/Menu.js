import React from 'react'
import './Menu.css'

class Menu extends React.Component {

    render() {
        return (
            <div class="menu-botao btn-group dropleft"> 
                <button type="button" class="botao-menu  btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Menu
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item"  href="#">Home</a>
                <a class="dropdown-item"  href="#">Você sabia?</a>
                <a class="dropdown-item"  href="#">Busque a creche</a>
                </div>
            </div>
        )
    }
}

export default Menu