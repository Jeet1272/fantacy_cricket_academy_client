import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import Sidenav from '../shared/Sidenav/Sidenav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='3'>
                        <Sidenav></Sidenav>
                    </Col>
                    <Col lg='9'>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;