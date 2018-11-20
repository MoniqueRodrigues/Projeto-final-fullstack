import React from 'react';
import './Botao.css';


class Botao extends React.Component {
    render() {
        return(<button className="botao-react">{this.props.nome}</button>)
    }
}

export default Botao