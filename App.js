import logo from './fluff.png';
import logo2 from './fluffy.png';
import yosh from './yosh.jpg'
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
    <Navbar bg="light" >
  	  <Navbar.Brand href="#home">
			  <img
          src={logo}
          width="100"
          height="110"
          className="d-inline-block align-top mt-3"
          alt=""
			  />
			  <img 
          src={logo2}
          width="240"
          height="110"
          className="d-inline-block align-top mt-3"
          alt=""
        />	
		  </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
	  </Navbar>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={yosh}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Your new best friend</h3>
          <p>World-class Frenchies at Family Prices</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default App;
