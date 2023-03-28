import React from 'react';
import '../CSS/proyectos.css';


function Proyectos(props){
    return(
        <div className='proyectos'>
            <img src={require(`../img/${props.imagen}.png`)} className={` ${props.claseA} ${props.claseS}`}  alt={props.imgInfo} />
            <div className='proyectos-texto'>
                <h2 className='proyecto-titulo'>{props.nombre}</h2>
                <p className='proyecto-texto'>{props.texto}</p>

                <div className='proyectos-localizacion'>
                    <span class="material-symbols-outlined">location_on</span>
                </div>
                <p className='localizacion-texto'>{props.localizacion}</p>
            </div>
        </div>
    )
}   

export default Proyectos;