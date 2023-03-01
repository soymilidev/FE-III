import { Component } from 'react';

class ClassComponent extends Component {
    constructor (props) {
        super(props)
        // this --> me refiero al estado dentro del componente
        this.state = {
            name: 'Fito Páez',
            age: 59,
            country: "Argentina",
        }
        // Para que el metodo pueda ser accedido por todo el componente/funcion tengo que hacer un bind. 
        // Unir el this con la función creada (changeName). Y eso hay que hacerlo con cada una de las funciones que hay que crear.
        this.changeName = this.changeName.bind(this)
    }

    changeName(){
        // modificar estado original, para que esto funcione tengo que hacer un bind ↑
        this.setState({
            name: "Rodolfo Páez"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
{/* dispara la funcion changeName */}
                <button onClick={this.changeName}> Cambiar nombre </button>
            </div>
        );
    }
}

export default ClassComponent;
