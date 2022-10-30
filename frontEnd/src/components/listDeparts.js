import { eventWrapper } from '@testing-library/user-event/dist/utils';
import { Component } from 'react';
import { add, getAll, remove, update } from '../services/operationsDepart';
import FormAjout from './formAjout';


class ListDeparts extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        departs : [],
        departToUpdate : null
     }

     getDepartements=()=>{
        getAll((res)=> {
            this.setState({
                departs : res.data
            })
         }) 
    }
    
    componentDidMount(){
      this.getDepartements()      
    }

     addDepart=(dep)=>{
      if(!this.state.departToUpdate){
            let maxId = this.state.departs.length>0 ? Math.max(...this.state.departs.map((d,i)=>d.id)) : 0
            let newDepart ={
                id : maxId +1,
                nom : dep
            }
            add(newDepart, () => this.getDepartements())
        }
        else{
            let elt = this.state.departToUpdate
            console.log(elt)
            
            let newDepart = { id : elt.id, nom : dep}
            update(elt._id, newDepart, ()=>this.getDepartements())
            
            this.setState({
                departToUpdate : null
            })

        }
        
       
     }
     
     /*
     deleteDepart=(ind)=>{
         
        let newDepart = [...this.state.departs]
        newDepart.splice(ind,1)
        this.setState({
             departs : newDepart
         })
     }*/

     updateDepart=(d)=>{
        this.setState({
            //update : true,
            departToUpdate :d

        })

     }
    
     render() { 
        return ( <div>
             
            <h1>Liste des départements</h1>
            <FormAjout addDepart={this.addDepart} updateDepart={this.state.departToUpdate}/>
            <table>
                {this.state.departs.map( (d , indice) => 
                    <tr key={indice}>
                            <td>{d.id}</td>
                            <td>{d.nom}</td>
                            <td><button onClick={()=>this.updateDepart(d)}>Editer</button></td>
                            <td><button onClick={()=>remove(d._id, () => this.getDepartements())}>X</button></td>
                    </tr>)}

            </table> 
            
        
        </div> );
    }
}
 
export default ListDeparts;