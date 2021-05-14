import React, { useState } from 'react';
import TituloFormulario from '../tituloFormulario/titulo-formulario.componente';
import './tabla-formulario.estilo.css';


const TablaFormulario = () => {

    const [modalidad, setModalidad] = useState('r1');
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [monto, setMonto] = useState(0);
    
    const guardarInformacion =(event)=>{
        event.preventDefault();
        console.log('modalidad' + modalidad);
        console.log('nombre' + nombre);
        console.log('cantidad' + cantidad);
        console.log('monto' + monto);
    }

    return (
        <div className ="tabla-formulario-cont">

            <div>
                <TituloFormulario/>
            </div> 
            <div>
                <form>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                Modalidad
                            </td>
                            <td>
                                <select 
                                    value={modalidad}
                                    onChange={(event)=>{
                                        console.log(event.target.value);
                                        setModalidad(event.target.value);
                                    }}
                                >
                                    <option value="r1">Creditos</option>
                                    <option value="r2">Cuenta_Ahorro</option>
                                     <option value="r3">Cartera</option>
                                </select>
                            </td>
                        </tr>
                        <tr> 
                            <td>Nombre</td> 
                            {'   '}
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
                            <td>Cantidad</td> {'   '}
                            <td>
                                <input 
                                    type="number"
                                    value={cantidad}
                                    onChange={(event)=>{
                                        setCantidad(event.target.value);
                                    }}
                                />
                            </td>
                        </tr>
                        <tr> 
                            <td>Monto</td> {'   '}
                            <td>
                                <input 
                                    type="number"
                                    value={monto}
                                    onChange={(event)=>{
                                        setMonto(event.target.value);
                                    }}
                                />
                            </td>
                        </tr>

                    

                    <tr>
                        <td>
                            <button
                                onClick={guardarInformacion}
                            >
                                 Guardar Informacion
                            </button>
                        </td>
                    </tr>
                        </tbody>


                    </table>
                </form>
            </div>
        </div>   
    );
}

export default TablaFormulario;