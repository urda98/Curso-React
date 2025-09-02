import React from "react";

const ListaUsuarios = () => {

    const usuarios=['Nicolas', 'Ezequiel', 'Guido','Maria'];
    
    return(
        <ul>
            {usuarios.map((usuario)=>(
                <li key={usuario}>
                    {usuario}
                </li>
                ) )}
        </ul>
    );
}

export default ListaUsuarios;