import React from 'react';
import './tabla-general-banco.estilo.css';
import Titulo from '../titulo/titulo.componente';
import TablaContenidoBanco from '../tabla-contenido-banco/tabla-contenido-banco.componente';


const TablaGeneralBanco = (props) => {
    return (
        <div className ="tabla-general-banco-cont">
            <Titulo/>
            <TablaContenidoBanco listaSección={props.listaSección}/>
            
        </div>   
    );
}

export default TablaGeneralBanco;

