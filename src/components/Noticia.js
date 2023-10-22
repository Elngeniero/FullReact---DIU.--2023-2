import React from 'react'
import "./Noticia.css"

function Noticia(props) {
  return (<div className='Noticia'>
    <h2> {props.titulo} </h2>
    <p>{props.fecha}</p>
    </div>)
}

export default Noticia