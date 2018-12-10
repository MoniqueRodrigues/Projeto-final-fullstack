import React from 'react'
import './Card.scss'



function Card(props){
    return(
    <div className="cards">
      
            <div className="card-wrap">
                <div className="card">
                    <div className="adelante card1__imagem">

                        <div className="atras">
                                <p>blalalal</p>
                        </div>
                    </div>
                </div>
            </div>  
            
            <div className="card1__imagem"></div>


            
            <div className="card-wrap">
                <div className="card">
                    <div className="adelante card2__imagem">

                        <div className="atras">
                                <p>blalalal</p>
                        </div>
                    </div>
                </div>
            </div>  
            
            <div className="card2__imagem"></div>

            

            
            <div className="card-wrap">
                <div className="card">
                    <div className="adelante card3__imagem">

                        <div className="atras">
                                <p>blalalal</p>
                        </div>
                    </div>
                </div>
            </div>  
            
            <div className="card3__imagem"></div>
            
    </div>   
    )
}
export default Card
