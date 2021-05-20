import React, { useState } from 'react';
import TituloFormulario2 from '../tituloFormulario2/titulo-formulario.componente2';
import './tabla-formulario.estilo2.css';
import Personas1 from '../img/Personas1.jpg';


const TablaFormulario2 = () => {

    const [tipoDocumento, setTipoDocumento] = useState('r1');
    const [documento, setDocumento] = useState(0);
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState(0);
    /*const [documento, setDocumentoValidador] = useState('');*/

    /*let validate=true;
    const addCharacter = () => {
        if (documento == null || documento >= -1) {
            validate=false;
            setDocumentoValidador("Numero no permitido");
        }else{
            setDocumentoValidador("");
        }
        console.log('documento: ' + documento)

    }*/
    
    const guardarInformacion =(event)=>{
        event.preventDefault();
        console.log('tipoDocumento' + tipoDocumento);
        console.log('documento' + documento);
        console.log('nombre' + nombre);
        console.log('edad' + edad);
    }

    return (
        <div className ="tabla-formulario-cont2">

            <div>
                <img className="Personas" src={Personas1}/>
            </div>  

            <div>
                <TituloFormulario2/>
            </div> 
            <div>
                <form>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                Tipo Documento
                            </td>
                            <td>
                                <select 
                                    value={tipoDocumento}
                                    onChange={(event)=>{
                                        console.log(event.target.value);
                                        setDocumento(event.target.value);
                                    }}
                                >
                                    <option value="r1">Cedula Ciudadania</option>
                                    <option value="r2">Pasaporte</option>
                                    <option value="r3">Cedula Extranjeria</option>
                                    <option value="r3">Permiso Especial de Permanencia</option>
                                </select>
                            </td>
                        </tr>

                        
                        <tr> 
                            <td>Documento</td> 
                            {'   '}
                            <td>
                                <input 
                                    type="number"
                                    value={documento}
                                    onChange={(event)=>{
                                        setDocumento(event.target.value);
                                   
                                    /*<span className='error'>{documento}<span/>*/
                                    }}  
                                />
                                
                                
                            </td>
                            
                            
                        </tr>
                        
                        <tr> 
                            <td>Nombre Completo</td> {'   '}
                            <td>
                                <input 
                                    type="text"
                                    value={nombre}
                                    onChange={(event)=>{
                                        setNombre(event.target.value);
                                    }}
                                />
                            </td>
                        </tr>
                        <tr> 
                            <td>Edad</td> {'   '}
                            <td>
                                <input 
                                    type="number"
                                    value={edad}
                                    onChange={(event)=>{
                                        setEdad(event.target.value);
                                    }}
                                />
                            </td>
                        </tr>

                    

                    <tr>
                    <td >                
                    <div className="centrar">

                       
                    
                            <button
                                onClick={guardarInformacion}
                            >
                                <h4>
                                Guardar Registro
                                </h4>

 
                            </button>
                    </div>    
                    </td>    
                    </tr>
                        </tbody>


                    </table>
                    
                </form>
            </div>
        </div>   
    );
}

export default TablaFormulario2;