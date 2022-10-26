import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidenav = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <p>Total Courses {courses.length}</p>
            <div>
                {
                    courses.map(course => <p key={course.id}><Link>{course.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default Sidenav;