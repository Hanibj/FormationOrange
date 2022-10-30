import { eventWrapper } from '@testing-library/user-event/dist/utils';
import { Component } from 'react';


class Presentation extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        titre : 'Qui sommes nous ?',
        contact : {
            nom : 'Ma Société',
            email : 'contact@societe.com',
            logo : <img src='logo512.png' width ={100} alt='MaSociete'/>
        },
        departs : [
            { id : 1, nom : 'Commercial'},
            { id : 2, nom : 'Developpement'},
            { id : 3, nom : 'Maintenance'}
        ],
        nouveauDepart : '',
        update : false,
        departToUpdate : null
     }

     addDepart=(event)=>{
        event.preventDefault();
        if(!this.state.update){
            let maxId = this.state.departs.length>0 ? Math.max(...this.state.departs.map((d,i)=>d.id)) : 0
            let newDepart ={
                id : maxId +1,
                nom : this.state.nouveauDepart
            }
            this.setState({
                departs : [...this.state.departs, newDepart],
                nouveauDepart :''
            })
        }
        else{
            let indice = this.state.departs.indexOf(this.state.departToUpdate)
            let newDepart = [...this.state.departs]
            newDepart[indice].nom=this.state.nouveauDepart
            this.setState({
                departs : newDepart,
                nouveauDepart :'',
                update : false
            })

        }
        
       
     }
     
     handleChange=(event)=>{
            this.setState({
                nouveauDepart : event.target.value
            })
     }

     deleteDepart=(ind)=>{
         
        let newDepart = [...this.state.departs]
        newDepart.splice(ind,1)
        console.log(newDepart)
        this.setState({
             departs : newDepart
         })
     }

     updateDepart=(d)=>{
        this.setState({
            update : true,
            nouveauDepart : d.nom,
            departToUpdate :d

        })

     }
    
     render() { 
        return ( <div>
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
            <h1>Liste des départements</h1>
            <form onSubmit={this.addDepart}>
                <input type="text" value={this.state.nouveauDepart} onChange={this.handleChange}
                        placeholder={this.state.update ? this.state.nouveauDepart : 'Nouveau département'}
                    />
                <button>{this.state.update ? 'Modifier département' : 'Ajouter département' }</button>
            </form>
            <table>
                {this.state.departs.map( (d , indice) => 
                    <tr key={indice}>
                            <td>{d.id}</td>
                            <td>{d.nom}</td>
                            <td><button onClick={()=>this.updateDepart(d)}>Editer</button></td>
                            <td><button onClick={()=>this.deleteDepart(indice)}>X</button></td>
                    </tr>)}

            </table> 
            
        
        </div> );
    }
}
 
export default Presentation;