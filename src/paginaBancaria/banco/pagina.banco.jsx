import React from 'react';
import TablaFormulario from './componentes/paginaFormularioBanco/tabla-formulario/tabla-formulario.componente';
import TablaGeneralBanco from './componentes/tabla-general-banco/tabla-general-banco.componente';


const PaginaBanco = () => {

    let listaSección = [
        {
            cod:"m1",
            nombre:'Creditos',
            sección:[
                {
                    codSec:"m1s1",
                    nombre:"Vivienda",
                    monto:1000000,
                    cantidad:1,
                },                    
                {
                    codSec:"m1s2",
                    nombre:"Vehiculo",
                    monto:100000,
                    cantidad:10,
                },
                {
                    codSec:"m1s3",
                    nombre:"Personal",
                    monto:300000,
                    cantidad:5,
                }
            ]
        },
        {
            cod:"m2",
            nombre:'Cuenta_Ahorro',
            sección:[
                {
                    codSec:"m2s1",
                    nombre:"Nomina",
                    monto:100000,
                    cantidad:10,
                },
                {
                    codSec:"m2s2",
                    nombre:"Ahorro_Vivienda",
                    monto:500000,
                    cantidad:200,
                },
                {
                    codSec:"m2s3",
                    nombre:"Cuenta_Personal",
                    monto:100000,
                    cantidad:200,
                }                
            ]
            },
            {
                cod:"m3",
                nombre:'Cartera',
                sección:[
                {
                    codSec:"m3s1",
                    nombre:"Acuerdo_Pago",
                    monto:500000,
                    cantidad:20,
                },
                {
                    codSec:"m3s2",
                    nombre:"Refinanciacion",
                    monto:100000,
                    cantidad:10,
                },
                {
                    codSec:"m3s3",
                    nombre:"Normalizacion",
                    monto:500000,
                    cantidad:1,
                },
            ]
        },
        ];

    return (
        <> 
            <TablaGeneralBanco 
                listaSección={listaSección} 
            />
            <TablaFormulario/>

        </>
    );
}
export default PaginaBanco;

