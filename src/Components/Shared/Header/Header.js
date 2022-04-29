import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logos/car.png'
import './Header.css'



const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <Navbar bg="success" expand="lg">
            <Container className='p-2'>

                <Navbar.Brand as={Link} to='/'>
                    <div className='d-flex align-items-center'>
                        <img className='logo' src={logo} alt="" />
                        <h3>Trader</h3>
                    </div>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />


                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link as={Link} to='/home' className='nav-link text-black'>Home
                        </Nav.Link>

                        <Nav.Link
                            as={Link} to='/Inventory' className='nav-link text-black'>
                            Inventory
                        </Nav.Link>

                        <Nav.Link
                            as={Link} to='/blogs' className='nav-link text-black'>
                            Blogs
                        </Nav.Link>

                    </Nav>


                    <Nav className=''>
                        <Nav.Link
                            as={Link} to='/manageItems' className='nav-link text-black '>
                            Manage Items
                        </Nav.Link>

                        <Nav.Link
                            as={Link} to='/blogs' className='nav-link text-black'>
                            My Items
                        </Nav.Link>

                        {
                            user ?
                                <button className='btn btn-link text-decoration-none text-black sign-out-btn' onClick={handleSignOut}>Sign out
                                </button>
                                :
                                <Nav.Link
                                    as={Link} to='/login' className='nav-link text-black'>
                                    Login
                                </Nav.Link>
                        }

                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};

export default Header;