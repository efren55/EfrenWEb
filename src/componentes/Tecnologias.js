import React from 'react';
import '../CSS/tecnologias.css';
import JS from '../img/iconJS.png';
import CSS from '../img/iconCSS.png';
import HTML from '../img/iconHTML.png';
import IREACT from '../img/iconREACT.png';
import Cat from '../img/Coding_Cat.png'



function Tecnologias(){
    return(
        <div className='contenedor-tecnologia' id='tecnologias'>
            
            <div className='contenedor-iconos'>
                <img src={Cat} alt='Icono Gato' className='cat-icon'></img>
            </div>

            <div className='contenedor-img'>
                <h1 className='titulo-apartado'>Tecnologias</h1>
                <div className='imagenes'>
                    <img className='html-icono' src={HTML} alt='Icono HTML'/>
                    <img className='css-icono' src={CSS} alt='Icono CSS'/>
                    <img className='js-icono' src={JS} alt='Icono JS'/>
                    <img className='react-icono' src={IREACT} alt='Icono REACT'/>
                </div>
            </div>
                
            
        </div>
    )
}   

export default Tecnologias;