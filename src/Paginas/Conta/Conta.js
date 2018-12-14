import React, { Component } from 'react'
import Link from '../../componentes/Link/Link'
import Botao from '../../componentes/Botao/Botao'
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import Cabecalho from '../../componentes/Cabecalho/Cabecalho'
import Menu from '../../componentes/Menu/Menu'
import './Conta.scss'



class Conta extends Component {
  constructor(props) {
    super(props)

    this.nomeRef = React.createRef()
    this.emailRef = React.createRef()
    this.senhaRef = React.createRef()

    this.state = { desabilitado: true }
  }

  habilitaOuDesabilita = () => {
    const campoNome = this.nomeRef.current
    const campoEmail = this.emailRef.current
    const campoSenha = this.senhaRef.current

    if (campoNome.temErro() || campoEmail.temErro() || campoSenha.temErro()) {
      this.setState({ desabilitado: true })
    } else {
      this.setState({ desabilitado: false })
    }
  }

  render() {
    return (
      <div>
         <Menu />
        <main className="conta">
        <Cabecalho textoNormal="Preencha os dados e " textoColorido="crie sua conta" />
        
          
            <Legenda htmlFor="nome">Nome</Legenda>
            <Campo ref={this.nomeRef} id="nome" type="text" name="nome" placeholder="Nome" required minLength={10} onChange={this.habilitaOuDesabilita} />
            
            
            <Legenda htmlFor="email">E-mail</Legenda>
            <Campo ref={this.emailRef} id="email" type="email" name="email" placeholder="Email" required onChange={this.habilitaOuDesabilita} />
            
            <Legenda htmlFor="senha">Senha</Legenda>
            <Campo ref={this.senhaRef} id="senha" type="password" name="senha" placeholder="Senha" required minLength={6} onChange={this.habilitaOuDesabilita} />
            
            {/* <Botao desabilitado={this.state.desabilitado}>Enviar</Botao> */}
            <Botao desabilitado={this.state.desabilitado}><a href="/Login">Enviar</a></Botao>
      
        </main>
    </div>    
    )
  }
}

export default Conta