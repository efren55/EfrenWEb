import React from 'react';
import '../CSS/footer.css';




function Footer(){

    /*<img src={require('../img/freelancer.png')} className='freelancer'  alt='freelancer'/> */

    const descarga = () =>{
        // Ruta del archivo PDF a descargar
        const pdfUrl = 'https://drive.google.com/file/d/1MMKl0pz_CQSyaXgehYmmjJXz6sw-wVLb/view?usp=share_link';
        // Nombre del archivo PDF
        const pdfName = 'Efren_CV.pdf';
        
        // Crear un elemento 'a' con el atributo 'href' y el nombre del archivo PDF
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = pdfName;
        
        // Simular un clic en el enlace para descargar el archivo
        link.click();
    }
    return(
        <div className='contenedor-footer' id='CV'>
            <img src={require('../img/setupDos.png')} className='setup'  alt='setup'/>
            <button className='curriculum' onClick={descarga}></button>
            
        </div>
    )
}   

export default Footer;