
import { Link } from "react-router-dom";
import we from "./assets/we.avif";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Navigate() {
    return (
        <nav>
        
        <Navbar bg="dark" data-bs-theme="dark" style={{ padding: "25px 0" }}>
        <Container>
          <Navbar.Brand >Zhein <img src={we} alt="logo" style={{ width: "90px", height: "90px", borderRadius: "50%", marginLeft: "10px" }}/></Navbar.Brand>
          <Nav className="me-auto" style={{ fontSize: "30px" }}>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
          </Nav>
        </Container>

        <Navbar className="bg-body-tertiary justify-content-between">
        <Form className="d-flex">
            <Row>
            <Col xs="auto">
                <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                />
            </Col>
            <Col xs="auto">
                <Button type="submit">Submit</Button>
            </Col>
            </Row>
        </Form>
        </Navbar>

      </Navbar>


      
        
        </nav>

        
    );
}
        
    export default Navigate;