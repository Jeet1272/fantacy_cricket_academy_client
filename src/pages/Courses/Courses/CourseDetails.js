import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course)
    const { name, picture, price, auther, views, details } = course
    return (
        <div className='my-5'>
            <Card style={{ width: '40rem', margin: '0px auto' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item className='text-success'>By: {auther}</ListGroup.Item>
                    <ListGroup.Item>{price}</ListGroup.Item>
                    <ListGroup.Item>Views: {views}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Button variant="primary"><Link className='text-white' to={`/checkout/${course.id}`} >Get premium access</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;