import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidenav from './Sidenav/Sidenav';
import CourseItem from './Courses/CourseItem';

const Courses = () => {
    return (
        <Container>
            <Row>
                <Col lg='3'>
                    <Sidenav></Sidenav>
                </Col>
                <Col lg='9'>
                    <CourseItem></CourseItem>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;