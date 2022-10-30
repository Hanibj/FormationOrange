import { Component } from 'react';


class FormAjout extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        nouveauDepart : '',
    }
    
    handleChange=(event)=>{
        this.setState({
            nouveauDepart : event.target.value
        })
    }

    addDepart=(event)=>{
        event.preventDefault()
        this.props.addDepart(this.state.nouveauDepart)
        this.setState({
            nouveauDepart:''
        })
    }

    render() { 
        return (
        <form onSubmit={this.addDepart}>
            <input type="text" value={this.state.nouveauDepart} onChange={this.handleChange}
                    placeholder={this.props.updateDepart ? this.props.updateDepart.nom : 'Nouveau département'}
                />
            <button>{this.props.updateDepart ? 'Modifier département' : 'Ajouter département' }</button>
        </form>);
    }
}
 
export default FormAjout;