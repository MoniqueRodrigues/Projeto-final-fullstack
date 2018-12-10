import React from 'react'
import Menu from '../../componentes/Menu/Menu.js'
import QuemSomos from '../../Paginas/QuemSomos/QuemSomos';
import './Tabela.scss'
import Cabecalho from '../Cabecalho/Cabecalho';
import Botao from '../Botao/Botao';

function Tabela(){
    return(
        
        <div className="container">
         <Cabecalho textoNormal="Busque sua creche em" textoColorido="São Paulo"/>
      
        {/* <div className="titulo">
            <h3>Encontre a creche que procura em São Paulo através da busca
                abaixo</h3>
        </div> */}
        <form>
            <div className="tabela">
                <div className="col">
                    <label className="label" for="txtBairro">Bairro</label>
                    <input id="txtBairro" type="text" className="form-control"/>
                </div>
                <div className="col">
                    <label className="label" for="txtEscola">Escola</label>
                    <input id="txtEscola" type="text" className="form-control"/>
                </div>
                <div className="col">
                    <label className="label" for="txtEsfera">Esfera</label>                  
                    <select name="" id="selectEsfera" className="form-control">
                        <option value="">TODAS</option>
                        <option value="">ESTADUAL-SE</option>
                        <option value="">MUNICIPAL</option>
                        <option value="">PARTICULAR</option>
                        <option value="">ESTADUAL-OUT</option>
                    </select>
                </div>
                <div className="col">
                    <label className="label" for="txtTipo">Tipo</label>
                    <select name="" id="selectEsfera" className="form-control">
                        <option value="">TODAS</option>
                        <option value="">EEI</option>
                        <option value="">EMEI</option>
                        <option value="">CEI DIRET</option>
                        <option value="">CEMEI</option>
                        <option value="">CCI/CIPS</option>
                        <option value="">CEI INDIR</option>
                        <option value="">CR.P.CONV</option>
                        <option value="">CCI</option>
                    </select>
                </div>
            </div>
            <div className="button">
                <Botao>Encontrar Creche</Botao>
            </div>

        </form>

     

</div>




)
}






















export default Tabela