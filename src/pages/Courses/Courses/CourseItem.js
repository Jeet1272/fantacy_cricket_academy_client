import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const CourseItem = ({ course }) => {
    const { name, picture, price, auther, views } = course;

    return (
        <div >
            <Card>
                <Card.Img style={{ height: '200px' }} variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        By: <Link>{auther}</Link>
                    </Card.Text>
                    <div>
                        <p>{price}</p>
                        <p>views: {views}</p>
                    </div>
                    <Button variant="primary">Buy Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseItem;