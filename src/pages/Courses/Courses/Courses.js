import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Sidenav from '../Sidenav/Sidenav';
import CourseItem from './CourseItem';
import './Courses.css'

const Courses = () => {
    const courses = useLoaderData()

    return (
        <Container>
            <Row>
                <Col lg='3'>
                    <Sidenav></Sidenav>
                </Col>
                <Col lg='9' className='courses-container'>
                    {
                        courses.map(course => <CourseItem key={course.id} course={course}></CourseItem>)
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;