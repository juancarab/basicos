import React from 'react';

function Header({titulo}){

    /*const edad = 18;
    let mensaje;
    if(edad>=18){
        mensaje = 'eres mayor de edad'
    } else {
        mensaje= 'eres menor de edad'
    }*/

    return(
    <h1 className="encabezado">{titulo}</h1>
    )
}
export default Header;