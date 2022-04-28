import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/car.png'
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="primary" expand="lg">
            <Container>

                <Navbar.Brand as={Link} to='/'>
                    <div className='d-flex align-items-center'>
                        <img className='logo' src={logo} alt="" />
                        <h3>Trader</h3>
                    </div>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />


                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link as={Link} to='/home' className='text-black'>Home
                        </Nav.Link>

                        <Nav.Link
                            as={Link} to='/Inventory' className='text-black'>
                            Inventory
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};

export default Header;