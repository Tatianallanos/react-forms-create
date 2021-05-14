import React from 'react';
import './modalidad.estilo.css';

const Modalidad = (props) => {
    return (
        <div className="modalidad-cont" >
          {props.nombreModalidad}
        </div>   
    );
}

export default Modalidad;