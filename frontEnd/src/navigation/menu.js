import { Component } from 'react';
import { Link, Route, BrowserRouter as Router , Routes } from 'react-router-dom';
import Accueil from '../components/accueil';
import Apropos from '../components/apropos';
import ListDeparts from '../components/listDeparts';


class Menu extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( <Router>
                    <nav>
                        <ul>
                            <li><Link to="/">Accueil</Link> </li>
                            <li><Link to="/apropos">A propos</Link></li>
                            <li><Link to="/departements">Départements</Link></li>
                        </ul>
                    </nav>
                    <div>
                        <Routes>
                            <Route path='/' element={<Accueil/>}></Route>
                            <Route path='/apropos' element={<Apropos/>}></Route>
                            <Route path='/departements' element={<ListDeparts/>}></Route>
                        </Routes>
                    </div>
                </Router>);
    }
}
 
export default Menu;