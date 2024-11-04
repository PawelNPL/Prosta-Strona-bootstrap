import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';
import Component1 from './components/c1';
import Component2 from './components/c2';
import Component3 from './components/c3';
import Component4 from './components/c4';
import Component5 from './components/c5';

function App() {
  return (
    <div className="App" style={{ width: '100%', height: '1000px' }}>


      <Navbar bg="white" variant="light" expand="lg" style={{ width: '100%' }}>
        <Container fluid>
          <Navbar.Brand className='NavbarBrand' style={{ fontSize:'3vw'}} href="#" >GenSoft</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{fontSize:'1.2vw'}}>
              <Nav.Link href="#home" className="">Home</Nav.Link>
              <Nav.Link href="#about" className="">About</Nav.Link>
              <Nav.Link href="#services" className="">Services</Nav.Link>
              <Nav.Link href="#contact" className="">Contact</Nav.Link>
            </Nav>
            <div>
              <Button variant="outline-dark" className="btn-lg me-3">Login</Button>
              <Button variant="outline-dark" className="btn-lg me-3">Sign in</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
      <Component1 />
      

      <Component2 />


      <Component3 />


      <Component4 />


      <Component5 />
      </div>
      





    </div>

    


  );
}

export default App;
