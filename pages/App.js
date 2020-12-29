import logo from '../images/fluff.png';
import logo2 from '../images/fluffy.png';
import yosh from '../images/yosh.jpg'
import './App.css';
import Navit from '../components/navit';
import { NavLink } from 'react-router-dom';
import Routes from '../routes/routes';


function App() {
  return (
    <div className="App">
    <Navit/>
    <Routes/>
    </div>
  );
}

export default App;
