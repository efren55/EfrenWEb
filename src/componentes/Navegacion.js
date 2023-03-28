import React from 'react';
import '../CSS/navegacion.css'

function Navegacion(props){
    return(
        <nav className='navegacion'>
            <a className={props.clase} href={props.id}>{props.nombre}</a>
        </nav>
    );
}

export default Navegacion;