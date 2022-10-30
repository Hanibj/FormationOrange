import { Component } from 'react';

const msg = <h1>Bienvenue à notre site de la scoiété : Ma Société !</h1>
class Accueil extends Component {
     
    render() { 
        return (
            <div>
                {msg}
            </div>
            );
    }
}
 
export default Accueil;