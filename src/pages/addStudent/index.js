import React, { useState } from 'react';
import './style.css';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import { createStudent } from '../../services/studentService';
import { useNavigate } from 'react-router-dom';

function AddStudent({ auth }) {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [school, setSchool] = useState('');
    const [std, setStd] = useState(Number);
    const [division, setDivision] = useState('');
    const [status, setStatus] = useState(Boolean);

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const student = await createStudent({
                name,
                age,
                school,
                std,
                division,
                status,
            });
            if (student) {
                alert('Student added successfully');
            }
            window.location = window.location;
            // navigate('/home');
        } catch (error) {
            console.log(error);
            alert('something went wrong');
        }
    };

    return (
        <div className="addStudent">
            <div className="addStudentHeader">
                <Header />
            </div>
            <div className="addStudentBody">
                <Sidebar auth={auth} />
                <div className="studentContent">
                    <h3>Add Student</h3>
                    <hr />
                    <form className="form">
                        <div className="formFelid">
                            <label>Full Name</label>
                            <input
                                required
                                value={name}
                                name="name"
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className="formFelid1">
                            <label>Age</label>
                            <input
                                required
                                value={age}
                                name="age"
                                onChange={e => setAge(e.target.value)}
                            />
                        </div>
                        <div className="formFelid2">
                            <label>School</label>
                            <input
                                required
                                value={school}
                                name="school"
                                onChange={e => setSchool(e.target.value)}
                            />
                        </div>
                        <div className="formFelid3">
                            <label>Class</label>
                            <select onChange={e => setStd(e.target.value)}>
                                <option value="">Select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <div className="formFelid4">
                            <label>Division</label>
                            <select onChange={e => setDivision(e.target.value)}>
                                <option value="">Select</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select>
                        </div>
                        <div className="formFelid5">
                            <p>Status</p>
                            <div className="radio">
                                <label>
                                    <input
                                        value={true}
                                        onChange={e =>
                                            setStatus(e.target.value)
                                        }
                                        type="radio"
                                        name="Choice"
                                    />
                                    Active
                                </label>
                                <label>
                                    <input
                                        value={false}
                                        onChange={e =>
                                            setStatus(e.target.value)
                                        }
                                        type="radio"
                                        name="Choice"
                                    />
                                    Inactive
                                </label>
                            </div>
                        </div>
                        <button onClick={handleSubmit} className="button">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddStudent;
