import React from 'react';

import './sección.estilo.css';

const Sección = (props) => {
    return (
        <div className="sección-cont">

          {
            props.sección.cantidad === 100
            ? //Si-verdad
              <span className="sección-without-cantidad">{props.sección.nombre}</span>
            : //No-Falso
              <span>{props.sección.nombre}</span>
          }
        
          {' '}
          
          {props.sección.monto === 10000000
            ? //Si-verdad
            <span className="sección-without-monto">{props.sección.monto}</span>
          : //No-Falso
            <span>{props.sección.monto}</span>

          }
          </div>   
    );
}

export default Sección;