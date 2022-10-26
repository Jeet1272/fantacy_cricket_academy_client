import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'
import { AuthContext } from '../../context/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => { console.error(error) })
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Image src='https://media.istockphoto.com/vectors/sport-ball-on-background-of-stylized-shield-with-wings-cricket-vector-id1302794887?k=20&m=1302794887&s=612x612&w=0&h=U9GkBqD6z4Ci58p7OCeb8r25iOy41YozEP-K89mc_Pc=' className='header-logo' ></Image>
                <Navbar.Brand className='fs-2 text-success'>Fantasy Cricket Academy</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto m-2 my-lg-0 text-success"
                        navbarScroll
                    >
                        <Link className='mx-2 text-decoration-none text-success' to='/'>Home</Link>
                        <Link className='mx-2 text-decoration-none text-success' to='/courses'>Courses</Link>
                        <Link className='mx-2 text-decoration-none text-success' to='/blog'>Blog</Link>
                        <Link className='mx-2 text-decoration-none text-success' to='/about'>About Us</Link>
                        {
                            user ?
                                <Link onClick={handleLogOut} className='mx-2 text-decoration-none text-success'>Log Out</Link>
                                :
                                <Link className='mx-2 text-decoration-none text-success' to='/login'>Log In</Link>

                        }

                        {
                            user?.photoURL ?
                                <Image style={{ height: '35px' }} roundedCircle src={user.photoURL}></Image>
                                :
                                <FontAwesomeIcon className='mt-1 text-success' icon={faUserAlt}></FontAwesomeIcon>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;