import React from 'react';
import './tabla-general-banco.estilo.css';
import Bank from '../imagen/Bank.jpg';
import Titulo from '../titulo/titulo.componente';
import TablaContenidoBanco from '../tabla-contenido-banco/tabla-contenido-banco.componente';


const TablaGeneralBanco = (props) => {
    return (
        <div >
            <Titulo/>
            <TablaContenidoBanco listaSección={props.listaSección}/>
            <div>
                <img className="Banco" src={Bank}/>
            </div>                
        </div>   
           

    );
}

export default TablaGeneralBanco;

