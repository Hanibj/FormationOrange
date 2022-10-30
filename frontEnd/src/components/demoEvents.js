import { Component } from 'react';


class DemoEvents extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        compteur : 0,
        personne : '',
        listPersonnes : ['mahdi','maha','anis','cyrine']
     }
    
     opertaion=(signe)=>{
        const valeur = signe==='+' ? this.state.compteur + 1 : this.state.compteur - 1
        this.setState({
            compteur :   valeur
        })
     }

    changeHandler=(event)=>{
            this.setState({
                personne :  event.target.value
            })
    } 

    addPerson=(event)=>{
        event.preventDefault();
        /*
        let newTab = this.state.listPersonnes
        newTab.push(this.state.personne)
        console.log(newTab)
        */
        this.setState({
            listPersonnes : [...this.state.listPersonnes, this.state.personne]
        })
    }

    render() { 
        return ( <div>
            {/*<h2>Valeur du compteur : {this.state.compteur}</h2> 
            <button onClick={()=>this.opertaion('+')}>+</button>
        <button onClick={()=>this.opertaion('-')}>-</button>*/}
            <h2>Bonjour {this.state.personne}</h2>
            <form>
                <input type="text" onChange={this.changeHandler}/>
                <button onClick={this.addPerson}>Ajouter Personne</button>
                
            </form>
            <h2>Liste des personnes :</h2>
            {
                this.state.listPersonnes.map((p, i)=><li key={i}>{p}</li>)
            }

    
        </div> );
    }
}
 
export default DemoEvents;