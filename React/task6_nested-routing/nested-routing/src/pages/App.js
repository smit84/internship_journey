import {BrowserRouter as Router} from 'react-router-dom'  
import Navbar from '../components/Navbar';
import Sidediv from '../components/Sidediv';
import Contentdiv from '../components/Contentdiv';
import '../styles/App.css'

    function App() {
    return (
        <div className="App">
        <Router>
            <Navbar/>
            <div className="Main">
                <Sidediv/>
                <Contentdiv/>
            </div>
        </Router>
        </div>
    );
    }
    
    export default App;
    