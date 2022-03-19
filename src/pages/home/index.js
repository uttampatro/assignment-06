import React from 'react';
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

const useStyles = makeStyles({
    homeBody: {
        padding: '50px',
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
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
});

function Home() {
    const classes = useStyles();

    return (
        <div className="home">
            <div class="sidebar">
                <h3>Students</h3>
                <a class="active" href="#home">
                    - View Student
                </a>
                <a href="#addStudent">- Add Student</a>
            </div>
            <div class="content">
                {/* <Header auth={auth} /> */}
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
                                {/* {users.map(user => { */}
                                {/* return ( */}
                                <TableRow
                                    className={classes.row}
                                    // key={user._id}
                                >
                                    {/* <TableCell>{user._id}</TableCell> */}
                                    <TableCell>frfr</TableCell>
                                    <TableCell>fwfw</TableCell>
                                    <TableCell>uttam@email.com</TableCell>
                                    <TableCell>erfre</TableCell>
                                    <TableCell>erfre</TableCell>
                                    <TableCell>erfre</TableCell>
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
                                            // onClick={() =>
                                            //     // deletingUser(user._id)
                                            // }
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                {/* ); */}
                                {/* })} */}
                            </TableBody>
                        </Table>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;
