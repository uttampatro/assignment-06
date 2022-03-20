import React, { useEffect, useState } from 'react';
import './style.css';
import {
    TableHead,
    TableRow,
    TableBody,
    Table,
    Button,
    TableCell,
    TablePagination,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Header from '../../components/header';
import { deleteStudent, getAllStudent } from '../../services/studentService';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/sidebar';

const useStyles = makeStyles({
    homeBody: {
        padding: '30px',
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
    const [currentPage, setCurrentPage] = useState(0);
    const [studentPerPage, setStudentPerPage] = useState(7);
    const [totalCount, setTotalCount] = useState(0);
    const [currentRow, setCurrentRow] = useState({
        _id: '',
        name: '',
        age: '',
        school: '',
        std: Number,
        division: '',
        status: Boolean,
    });

    const handleChangePage = (event, value) => {
        setCurrentPage(value);
    };

    const handleChangeRowsPerPage = event => {
        setStudentPerPage(parseInt(event.target.value, 7));
        setCurrentPage(0);
    };

    const fetchStudentList = async () => {
        try {
            const data = await getAllStudent({
                page: currentPage + 1,
                limit: studentPerPage,
            });
            setStudents(data.studentList);
            setTotalCount(data.pagination.count);
        } catch (error) {
            console.log(error);
        }
    };

    const deletingStudent = async id => {
        try {
            const data = await deleteStudent(id);
            if (data) {
                alert('Deleted student successfully');
            }
            window.location = window.location;
            navigate('/home');
        } catch (error) {
            console.log(error);
        }
    };

    const openUpdateStudent = student => {
        setCurrentRow(student);
        navigate(`/updateStudent/${student._id}`);
    };

    useEffect(() => {
        fetchStudentList();
    }, [currentPage, studentPerPage]);

    return (
        <div className="home">
            <div className="homeHeader">
                <Header />
            </div>

            <div className="homebody">
                <Sidebar auth={auth} />
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
                                                {/* <TableCell>{student._id}</TableCell> */}
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
                                                        onClick={() =>
                                                            openUpdateStudent(
                                                                student
                                                            )
                                                        }
                                                        key={student._id}
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
                    <div className="home_footer">
                        <TablePagination
                            count={totalCount}
                            page={currentPage}
                            onPageChange={handleChangePage}
                            rowsPerPage={studentPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
