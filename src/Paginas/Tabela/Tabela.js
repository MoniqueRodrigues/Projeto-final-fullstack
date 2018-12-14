import React from 'react'
import Menu from './../../componentes/Menu/Menu'
import Botao from './../../componentes/Botao/Botao'
import Cabecalho from './../../componentes/Cabecalho/Cabecalho'
import './Tabela.scss'



const proxy = 'https://cors-anywhere.herokuapp.com/';

class Tabela extends React.Component {

    constructor(props) {
        super(props)
        this.state ={bairro: '', escola: '', esfera:'', tipo:'', loading: true, data: [], dataEmpty : false}

        this.handleChangeEsfera = this.handleChangeEsfera.bind(this)
        this.handleChangeTipo = this.handleChangeTipo.bind(this)
        this.handleChangeBairro = this.handleChangeBairro.bind(this)
        this.handleChangeEscola= this.handleChangeEscola.bind(this)
    }

    handleChangeEsfera = event => {this.setState({esfera: event.target.value})}
    handleChangeTipo   = event => {this.setState({tipo: event.target.value})}
    handleChangeBairro = event => {this.setState({bairro: event.target.value})}
    handleChangeEscola = event => {this.setState({escola: event.target.value})}
    

    componentDidMount = data => {
        this.setState({'loading': true, 'data': []})
        fetch(proxy + 'https://creches-api.herokuapp.com/api/v1/creches/page/0', Headers= ["Origin=null"])
        .then(res => res.json())
        .then((result) => {
            this.setState({'loading' : false, 'data': result.creches})
        })       
    }


    composeURL = (state, stateName, haveParameters) => {
        if(state !== '' && haveParameters) {
            return `&${stateName}=${state}`
        } else if(state !== '' && !haveParameters) {
            return `?${stateName}=${state}`
        } else {
            return ''
        }
    }

    loadData = event => {
        event.preventDefault()
        this.setState({loading : true})
        let urlBase = proxy + 'https://creches-api.herokuapp.com/api/v1/creches/creche'
        
    
        let parameters = [
            {'state': this.state.esfera, 'stateName': 'esfera'},
            {'state': this.state.escola, 'stateName': 'nome'},
            {'state': this.state.tipo,   'stateName': 'tipo'},
            {'state': this.state.bairro, 'stateName': 'bairro'}
        ].forEach(parameter => {
            urlBase += this.composeURL(parameter.state, parameter.stateName, urlBase.includes('?'))
        })

        fetch(urlBase, Headers= ["Origin=null"])
        .then(res => res.json())
        .then(result => {
            this.setState(
                {'loading' : false, 'data': result.creches, 'dataEmpty': result.creches.length === 0}
            )
        })        
    }

    render() {
        return (
            <div>
            <Menu />
            
            <div id="tabela">
                <div className="container">
                
                    <Cabecalho textoNormal="Busque sua creche em" textoColorido="São Paulo" />
                    <form>
                        
                        <div className="tabela">
                            <div className="col">
                                <label className="label" for="txtBairro">Bairro</label>
                                <input id="txtBairro" type="text"  value={this.state.bairro} onChange={this.handleChangeBairro} className="form-control" />
                            </div>
                            <div className="col">
                                <label className="label" for="txtEscola">Escola</label>
                                <input id="txtEscola" type="text"  value={this.state.escola} onChange={this.handleChangeEscola} className="form-control" />
                            </div>
                            <div className="col">
                                <label className="label" for="txtEsfera">Esfera</label>
                                <select name="" id="selectEsfera" value={this.state.esfera}  onChange={this.handleChangeEsfera} className="form-control">
                                    <option value="">TODAS</option>
                                    <option value="ESTADUAL-SE">ESTADUAL-SE</option>
                                    <option value="MUNICIPAL">MUNICIPAL</option>
                                    <option value="PARTICULAR">PARTICULAR</option>
                                    <option value="ESTADUAL-OUT">ESTADUAL-OUT</option>
                                </select>
                            </div>
                            <div className="col">
                                <label className="label" for="txtTipo">Tipo</label>
                                <select name="" id="selectTipo" value={this.state.tipo} onChange={this.handleChangeTipo} className="form-control">
                                    <option value="">TODAS</option>
                                    <option value="EEI">EEI</option>
                                    <option value="EMEI">EMEI</option>
                                    <option value="CEI DIRET">CEI DIRET</option>
                                    <option value="CEMEI">CEMEI</option>
                                    <option value="CCI/CIPS">CCI/CIPS</option>
                                    <option value="CEI INDIR">CEI INDIR</option>
                                    <option value="CR.P.CONV">CR.P.CONV</option>
                                    <option value="CCI">CCI</option>
                                </select>
                            </div>
                        </div>
                    </form>

                    <table>
                        <thead>
                            <tr>
                                <th>Escola</th>
                                <th>Bairro</th>
                                <th>Endereço</th>
                                <th>Esfera</th>
                                <th>Tipo</th>
                            </tr>
                        </thead>
                        <tbody>
                             {
                                this.state.data.map(item => (
                                    <tr>
                                        <td>{item.equipamento}</td>
                                        <td>{item.bairro}</td>
                                        <td>{item.endereco}</td>
                                        <td>{item.esfera}</td>
                                        <td>{item.tipo}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="button">
                <Botao onClick={this.loadData.bind(this)}>Encontrar Creche</Botao>
            </div>
        </div>
        )
    }
}

export default Tabela