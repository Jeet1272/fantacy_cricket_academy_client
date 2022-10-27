import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidenav = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('https://fantasy-cricket-academy-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <p>Total Courses: {courses.length}</p>
            <div>
                {
                    courses.map(course => <p key={course.id}><Link className='text-success' to={`/courses/${course.id}`}>{course.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default Sidenav;