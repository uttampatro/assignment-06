import React, { useEffect, useState } from 'react';
import './style.css';
import {
    TableHead,
    TableRow,
    TableBody,
    Table,
    Button,
    TableCell,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Header from '../../components/header';
import { deleteStudent, getAllStudent } from '../../services/studentService';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/userService';

const useStyles = makeStyles({
    homeBody: {
        padding: '30px',
        position: 'fixed',
        width: '75%',
    },
    table: {
        width: '100%',
        paddingLeft: '50px',
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: 'lightgray',
        },
    },
    row: {
        '& > *': {
            fontSize: 18,
        },
    },
});

function Home({ auth }) {
    const classes = useStyles();
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);

    const fetchStudentList = async () => {
        try {
            const data = await getAllStudent();
            setStudents(data);
        } catch (error) {
            console.log(error);
        }
    };

    const deletingStudent = async id => {
        try {
            const data = await deleteStudent(id);
            if (data) {
                alert('Deleted user successfully');
            }
            window.location = window.location;
            navigate('/home');
        } catch (error) {
            console.log(error);
        }
    };

    const loggingOut = async () => {
        try {
            await logout();
            auth();
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchStudentList();
    }, []);

    if (auth) {
        <>Loading....</>;
    }

    return (
        <div className="home">
            <Header />

            <div className="homebody">
                <div class="sidebar">
                    <h3>Students</h3>
                    <a className="active" href="/home">
                        - View Student
                    </a>
                    <a href="/addStudent">- Add Student</a>
                    <a onClick={loggingOut}>- Logout</a>
                </div>
                <div class="content">
                    <div className={classes.homeBody}>
                        <form method="post">
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow className={classes.thead}>
                                        {/* <TableCell>ID</TableCell> */}
                                        <TableCell>Name</TableCell>
                                        <TableCell>Age</TableCell>
                                        <TableCell>School</TableCell>
                                        <TableCell>Class</TableCell>
                                        <TableCell>Division</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {students.map(student => {
                                        return (
                                            <TableRow
                                                className={classes.row}
                                                key={student._id}
                                            >
                                                {/* <TableCell>{user._id}</TableCell> */}
                                                <TableCell>
                                                    {student.name}
                                                </TableCell>
                                                <TableCell>
                                                    {student.age}
                                                </TableCell>
                                                <TableCell>
                                                    {student.school}
                                                </TableCell>
                                                <TableCell>
                                                    {student.std}
                                                </TableCell>
                                                <TableCell>
                                                    {student.division}
                                                </TableCell>
                                                <TableCell>
                                                    {student.status
                                                        ? 'Active'
                                                        : 'Inactive'}
                                                </TableCell>
                                                <TableCell>
                                                    <Button
                                                        style={{
                                                            margin: '5px',
                                                        }}
                                                        // onClick={() =>
                                                        //     openUpdateUserDialog(user)
                                                        // }
                                                        // key={user._id}
                                                        color="primary"
                                                        variant="contained"
                                                    >
                                                        Edit
                                                    </Button>
                                                    <Button
                                                        color="secondary"
                                                        variant="contained"
                                                        onClick={() =>
                                                            deletingStudent(
                                                                student._id
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
