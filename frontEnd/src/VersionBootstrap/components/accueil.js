import { Component } from 'react';

const msg = "Bienvenue à notre site de la scoiété !"
class Accueil extends Component {
     
    render() { 
        return (
            
            <div className="card">
                    <div className="card-header">
                        <h2><label>Ma société</label></h2>
                    </div>
                    <div className="card-body">
                        <label>{msg}</label>
                    </div>
               
            </div>
            );
    }
}
 
export default Accueil;