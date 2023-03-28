import React from 'react';

function Imagen (props){
    return (
        <img src={require(`../img/${props.imagen}.jpg`)} className={`${props.claseUno}`} onClick={props.onclick} alt={props.imgInfo} />
    )
}

export default Imagen;