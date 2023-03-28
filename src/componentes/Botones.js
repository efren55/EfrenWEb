import React from 'react';
import '../CSS/botones.css';


export function BotonesInfo(props){
  return (
    <button className={`boton-info ${props.claseUno} ${props.claseDos} ${props.claseTres}`} onClick={props.onclick}></button>
  )
}

export function BotonesContacto(props){
    return(
        <a className={props.clase} href={props.link}></a>
    )
}