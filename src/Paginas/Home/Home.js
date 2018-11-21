import React from 'react'
import './Home.css'

class Home extends React.Component{
  render(){
    return(
          <div className="home">

              <h1 className="h1-titulo">{this.props.titulo}</h1>
              <h2 className="h2-subtitulo">{this.props.subtitulo}</h2>
              
          </div>

    )
  }
}  
  
export default Home