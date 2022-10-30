import React, { Component } from 'react'

const msg = <h1>Bienvenue à notre site de la scoiété : Ma Société !</h1>
class Accueil extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                {msg}
                <h2>Bienvenue : {this.props.prenom} {this.props.nom}</h2>
                
            </div>

        )
    }
}

Accueil.defaultProps = {    prenom : "Foulen",
			                nom : "Foulenii" 
                        }

export default Accueil