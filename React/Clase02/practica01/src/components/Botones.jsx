import React from "react";

const Botones = () => {

    const botones = ['Aceptar', 'Cancelar', 'Eliminar'];
    
    const estiloBoton = {
        padding: '10px 20px',
        margin: '5px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
    };

    const coloresBoton = {
        Aceptar:'#008000',
        Cancelar:'#ff8000',
        Eliminar:'#d9534f'
    }

    return(
        <div>
            {botones.map((btn)=>(
                <button key={btn} style={{...estiloBoton, backgroundColor: coloresBoton[btn]}} onClick={()=>alert('Presionaste un boton')}>
                    {btn}
                </button>
            ))              
            }
        </div>
    );

};

export default Botones;