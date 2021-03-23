import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const TodoList = (props) => {
    return (
        <Paper>
            <List>
            {props.todos.map((todo) => (
                <Fragment>
                    <ListItem>
                        <ListItemText>{todo.task}</ListItemText>
                    </ListItem>
                    <Divider />
                </Fragment>
            ))}
            </List>
        </Paper>
    );
};

export default TodoList;