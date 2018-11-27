import React from 'react'
import './Botao.css'
//import Home from './../../Paginas/Home/Home';


class Botao extends React.Component {
    render() {
        return(
            <button className="botao-react">
                {this.props.nome}
            </button>
        )

        
    }
}

export default Botao