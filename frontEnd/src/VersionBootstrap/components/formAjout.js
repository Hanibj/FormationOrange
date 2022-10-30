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
            <div className="row m-2">
                <div className="col">
                    <input className="p-1" type="text" value={this.state.nouveauDepart} onChange={this.handleChange}
                        placeholder={this.props.updateDepart ? this.props.updateDepart.nom : 'Nouveau département'}
                    />
                </div>
                <div className="col col-auto">
                    <button className="btn btn-primary">{this.props.updateDepart ? 'Modifier département' : 'Ajouter département' }</button>    
                </div>
            </div>
        </form>);
    }
}
 
export default FormAjout;