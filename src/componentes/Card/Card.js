import React from 'react'
import Botao from '../Botao/Botao'
import './Card.scss'



function Card(props){
    return(
    <div className="cards">
      
            <div className="card-wrap">
                <div className="card">
                    <div className="adelante card1__imagem">

                        <div className="atras">
                                <p> Pesquisa de creches públicas e particulares exclusivamente em São Paulo</p>
                                <Botao><a href="#tabela">Busque sua creche</a></Botao>
                        </div>
                    </div>
                </div>
            </div>  
            
            <div className="card1__imagem"></div>


            
            <div className="card-wrap">
                <div className="card">
                    <div className="adelante card2__imagem">

                        <div className="atras">
                                <p>Acesso as avaliações de creches realizadas por outros usuários, fazendo assim, a melhor escolha para a sua família</p>
                                <Botao><a href="/Conta">Cadastre-se agora</a></Botao>
                        </div>
                    </div>
                </div>
            </div>  
            
            <div className="card2__imagem"></div>

            

            
            <div className="card-wrap">
                <div className="card">
                    <div className="adelante card3__imagem">

                        <div className="atras">
                                <p>Tudo isso realizando seu cadastro em apenas 5 minutos!!!</p>
                                <Botao><a href="/Conta">Cadastre-se agora</a></Botao>
                        </div>
                    </div>
                </div>
            </div>  
            
            <div className="card3__imagem"></div>
            
    </div>   
    )
}
export default Card
