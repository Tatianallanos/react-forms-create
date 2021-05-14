import React from 'react';
import './tabla-contenido-banco.estilo.css';
import Modalidad from '../modalidad/modalidad.componente';
import Sección from '../sección/sección.componente';


const TablaContenidoBanco = (props) => {

    return (
        <div className="tabla-contenido-banco.container">
            <b>Modalidad - Sección</b>
            {props.listaSección.map((categoty, index) => {
                return (
                    <React.Fragment key={categoty.cod}>
                      <Modalidad nombreModalidad={categoty.nombre}/>
                      {categoty.sección.map((sección,indexsección)=>{
                        return (
                          <Sección key={sección.codSec}
                           sección={sección}    
                          /> 
                        );
                      })}
                    </React.Fragment>
              );
            })}                  
        </div>
    );
}

export default TablaContenidoBanco;