import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Row>
                <Col>
                    <Outlet></Outlet>
                </Col>
            </Row>
            <Footer></Footer>
        </div>
    );
};

export default Main;