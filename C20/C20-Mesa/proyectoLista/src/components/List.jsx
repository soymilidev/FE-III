import React, { useState, useEffect } from 'react';

function List() {
    const [elementos, setElementos] = useState([]);

    // Busca en el localStorage si hay elementos almacenados
    useEffect(() => {
        const elementosAlmacenados = JSON.parse(localStorage.getItem('elementos'));
        if (elementosAlmacenados) {
            setElementos(elementosAlmacenados);
        }
    }, []);

    // Se ejecuta cada vez que el estado local cambia. 
    // Almacena el estado local en el localStorage, convirtiendo los elementos en formato JSON para almacenarlos.
    useEffect(() => {
        localStorage.setItem('elementos', JSON.stringify(elementos));
    }, [elementos]);

    const handleAddItem = () => {
        const nuevoElemento = {
            id: Math.random().toString(10).slice(2, 11),
            name: `Elemento ${elementos.length + 1}`
        };
        setElementos([...elementos, nuevoElemento]);
    };

    // Excluimos cualquier elemento cuyo ID sea igual al ID especificado.
    // Y actualiza el estado local con los nuevos valores
    const handleDeleteItem = (id) => {
        setElementos(elementos.filter(elemento => elemento.id !== id));
    };

    return (
        <div>
            <button onClick={handleAddItem}>Agregar elemento</button>
            <ul>
                {elementos.map(item => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => handleDeleteItem(item.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;