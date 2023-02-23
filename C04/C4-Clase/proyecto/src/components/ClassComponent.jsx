// 1. importar de React | { NombreDeClase } | el export default lleva llaves
// import { ClassComponent } from "react"; --> da error
import React from 'react'

// 2. a) class | b) NombreDeClase | c) extends | d) React.Component: acceder al elemento component y hereda a mi comp. de clase
class ClassComponent extends React.Component {
// 3. metodo render con return
    render() {
        return (
            <div>
                <h1> Componente de clase</h1>
            </div>
        );
    }
}

// 4. Exportarlo para poder trabajarlo en App.jsx
export default ClassComponent;
