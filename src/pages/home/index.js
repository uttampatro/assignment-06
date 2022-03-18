import React from 'react';
import './style.css';

function Home() {
    return (
        <div className="home">
            <div class="sidebar">
                <h3>Student</h3>
                <a class="active" href="#home">
                    - View Student
                </a>
                <a href="#addStudent">- Add Student</a>
            </div>
            <div class="content">
                <h1>hello</h1>
            </div>
        </div>
    );
}

export default Home;
