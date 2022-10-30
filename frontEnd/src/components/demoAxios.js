import {Component} from 'react';
import axios from 'axios';

class PersonList extends Component {
    
    state = { ListPersons: []    }
    
    componentDidMount() {
     axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            console.log(res)
            this.setState({ ListPersons : res.data });
        })
    }
    
    render() {
        return (
          <ul> { this.state.ListPersons.map( (person, i) =>                
                <li key={i}>{person.name} -- {person.username}</li>)
               }
          </ul>
        )
    }
}

export default PersonList
