import { Component } from 'react';

class Apropos extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        titre : 'Qui sommes nous ?',
        contact : {
            nom : 'Ma Société',
            email : 'contact@societe.com',
            logo : <img src='logo512.png' width ={100} alt='MaSociete'/>
        } 
    }
    render() { 
        return (
            <div>
                <h1>{this.state.titre}</h1>  
                <table>
                    <tr>
                        <td>{this.state.contact.logo}</td>
                        <td>
                            <li>Societe : {this.state.contact.nom}</li>
                            <li>Email : {this.state.contact.email}</li>
                        </td>
                    </tr>
                
                </table>
            
            </div>   );
    }
}
 
export default Apropos;