import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(){
        super()
        this.state = {
            name: 'Catalina'
        }
        console.log('Se crea el constructor')
    }

    componentDidMount(){
        console.log('Se montó el componente de clase')
        setTimeout(() => {
            this.setState({name: 'Yessenia'})
        }, 2000)
        console.log(this.state.name)
    }

    componentDidUpdate() {
        console.log('Se actualizó el componente  de clase')
        console.log(this.state.name)
    }

    componentWillUnmount(){
        console.log('Se desmontó el componente  de clase')
    }

    render() {
        console.log('Se ejecuta el render de la clase')
    return (
        <div>
            <h1>{this.props.titulo}</h1>
            <h3>{this.state.name}</h3>
        </div>
    )
}
}
