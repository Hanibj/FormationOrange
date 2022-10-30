
import { Component } from 'react';
import { Link, Route, BrowserRouter as Router , Routes } from 'react-router-dom';
import Accueil from '../../VersionBootstrap/components/accueil';
import Apropos from '../../VersionBootstrap/components/apropos';
import ListDeparts from '../../VersionBootstrap/components/listDeparts';

class Menu extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( <Router>
            <nav className="navbar navbar-expand navbar-brand m-2">
                <ul className="navbar-nav">
                    <li>
                        <Link className="nav-link" to="/accueil">Accueil</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/apropos">A propos</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/listDeparts">Départements</Link>
                    </li>
                </ul>
            </nav>
    
            <div className="m-4">
                <Routes>
                    <Route path="/accueil" element={<Accueil/>}></Route>
                    <Route path="/apropos" element={<Apropos/>}></Route>
                    <Route path="/listDeparts" element={<ListDeparts/>}></Route>
                </Routes>
    
            </div>
        </Router> );
    }
}
 
export default Menu;