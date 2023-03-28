import React from 'react';
import '../CSS/informacion.css';
import {BotonesInfo,BotonesContacto} from './Botones';
import {infoEfren} from './Texto';
import { useState } from 'react';
import Imagen from './Imagenes';




function Sobremi(){

    const [claseUno,clickUno] = useState('boton-desactivado');
    const [claseDos,clickDos] = useState('boton-activo');
    const [claseTres,clickTres] = useState('boton-Desactivado');
    const [texto,actualizar] = useState(`${infoEfren.textoDos}`);


    const manejarClick = () =>{
        clickUno('boton-activo');
        clickDos('boton-desactivado');
        clickTres('boton-desactivado');
        actualizar(`${infoEfren.textoUno}`);

    }
    const manejarClickDos = () =>{
        clickDos('boton-activo');
        clickTres('boton-desactivado');
        clickUno('boton-desactivado');
        actualizar(`${infoEfren.textoDos}`);
    }
    const manejarClickTres = () =>{
        clickTres('boton-activo');
        clickDos('boton-desactivado');
        clickUno('boton-desactivado');
        actualizar(`${infoEfren.textoTres}`);
    }

    const [imgNombre,cambioUno] = useState('efrenImg');
    const [imgNombreDos,cambioDos] = useState('efrenWoods');
    const [imgNombreTres,cambioTres] = useState('uabc');

    const clickImgDos = () =>{
        if(imgNombre === 'efrenImg'){
            cambioUno('efrenWoods');
            cambioDos('efrenImg');
            cambioTres('uabc');
        }
        else if(imgNombre === 'uabc'){
            cambioUno('efrenWoods');
            cambioDos('efrenImg');
            cambioTres('uabc');
        }
        else{
            cambioUno('efrenImg');
            cambioDos('efrenWoods');
            cambioTres('uabc');
        }
        
    }

    const clickImgTres = () =>{
        if(imgNombre === 'efrenImg'){
            cambioUno('uabc');
            cambioDos('efrenWoods');
            cambioTres('efrenImg');
        }
        else if(imgNombre === 'efrenWoods'){
            cambioUno('uabc');
            cambioDos('efrenWoods');
            cambioTres('efrenImg');
        }
        else{
            cambioUno('efrenImg');
            cambioDos('efrenWoods');
            cambioTres('uabc');
        }
        
    }
    
    return(
        <div className='contenedor-sobremi' id='sobreMi'>
            <div className='contenedor-foto'>
                <Imagen
                    claseUno = 'efren-img'
                    imagen = {imgNombre}
                />

                <div className='contenedor-imagenes'>
                    <Imagen
                        claseUno = 'imagen-chica'
                        imagen = {imgNombreDos}
                        onclick = {clickImgDos}
                    />
                    <Imagen
                        claseUno = 'imagen-chica'
                        imagen = {imgNombreTres}
                        onclick = {clickImgTres}
                    />
                </div>
            </div>

            <div className='contenedor-texto'>

                <div className='contenedor-bio'>
                    <h2 className='ajuste-bio'>AJUSTE BIO:</h2>
                    <div className='contenedor-botones'>
                        <BotonesInfo onclick={manejarClick} claseUno={claseUno}></BotonesInfo>
                        <BotonesInfo onclick={manejarClickDos} claseDos={claseDos}></BotonesInfo>
                        <BotonesInfo onclick={manejarClickTres} claseTres={claseTres}></BotonesInfo>
                    </div>

                    <div className='contenedor-ajuste'>
                        <h2 className='ajuste-bio'>Corto</h2>
                        <h2 className='ajuste-bio'>Largo</h2>
                    </div>
                </div>

                <div className='texto'>
                    <p className='info-texto'>{texto}</p>
                </div>
                
                <div className='contenedor-contacto'>
                    <h2 className='ajuste-contacto'>CONTÁCTAME:</h2>
                    <nav className='contacto-botones'>
                        <BotonesContacto
                            clase='boton-contacto github'
                            link='https://github.com/efren55'
                        />
                        <BotonesContacto
                            clase='boton-contacto linkedin'
                            link='https://www.linkedin.com/in/efren-mariscal-osuna-87a2aa216/'
                        />
                        <BotonesContacto
                            clase='boton-contacto gmail'
                            link='mailto:efrenmo555@gmail.com'
                        />
                    </nav>
                </div>
                

            </div>
        </div>
    )
}

export default Sobremi;