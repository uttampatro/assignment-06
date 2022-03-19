import React from 'react';
import './style.css';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';

function AddStudent({ auth }) {
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
                            <input />
                        </div>
                        <div className="formFelid1">
                            <label>Age</label>
                            <input />
                        </div>
                        <div className="formFelid2">
                            <label>School</label>
                            <input />
                        </div>
                        <div className="formFelid3">
                            <label>Class</label>
                            <select onchange="">
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
                            <select onchange="">
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
                                    <input type="radio" name="Choice" />
                                    Active
                                </label>
                                <label>
                                    <input type="radio" name="Choice" />
                                    Inactive
                                </label>
                            </div>
                        </div>
                        <button className="button">Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddStudent;
