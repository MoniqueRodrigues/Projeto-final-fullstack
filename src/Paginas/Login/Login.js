import React, { Component } from 'react'
//import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
//import { logaUsuario } from '../../componentes/logaUsuario'
import Formulario from '../../componentes/Formulario/Formulario'
import Link from '../../componentes/Link/Link'
import Botao from '../../componentes/Botao/Botao'
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import Cabecalho from '../../componentes/Cabecalho/Cabecalho'
import './Login.scss'
import Menu from './../../componentes/Menu/Menu';


export default class Login extends Component {
  constructor(props) {
    super(props)
    
    this.emailRef = React.createRef() // { current: null }
    this.senhaRef = React.createRef()
    this.state = { desabilitado: true }
  }
  
  enviaDados = (evento) => {
    evento.preventDefault()
    
    const campoEmail = this.emailRef.current
    const campoSenha = this.senhaRef.current
    
    const dados = {
      email: campoEmail.getValor(),
      senha: campoSenha.getValor()
    }
    
    //this.props.logaUsuario(dados)
  }
  
  habilitaOuDesabilitaBotao = () => {
    const campoEmail = this.emailRef.current
    const campoSenha = this.senhaRef.current
    
    if (campoEmail.temErro() || campoSenha.temErro()) {
      this.setState({ desabilitado: true })
    } else {
      this.setState({ desabilitado: false })
    }
  }
  
  render() {
    if (this.props.usuario) {
      return <Redirect to="/" />
    }
    
    return (
      
      <div>
        <Menu />
        <main className="login">
      
        <Cabecalho textoNormal="Efetue o login com seu  " textoColorido="e-mail e senha" />
        
        <Formulario onSubmit={this.enviaDados}>
        <Legenda htmlFor="email">E-mail</Legenda>
        <Campo ref={this.emailRef} id="email" type="email" name="email" placeholder="Email" required onChange={this.habilitaOuDesabilitaBotao} />
        
        <Legenda htmlFor="senha">Senha</Legenda>
        <Campo ref={this.senhaRef} id="senha" type="password" name="senha" placeholder="Senha" required minLength={6} onChange={this.habilitaOuDesabilitaBotao} />
        
        <Formulario.Botao desabilitado={this.state.desabilitado}>
        <a href="tabela">Enviar</a>
        </Formulario.Botao>
        </Formulario>
        
        <Link url="/conta">Criar uma conta</Link>
        </main>
      </div>
    )
  }
}

/*
export default connect(
  (state) => ({ usuario: state.usuario })//, { logaUsuario }
)(Login)*/