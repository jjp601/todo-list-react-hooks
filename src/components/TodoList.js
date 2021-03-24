import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';

const TodoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
    if (todos.length) {
        return (
            <Paper>
                <List>
                {todos.map((todo, idx) => (
                    <Fragment>
                        <Todo 
                            {...todo}
                            key={todo.id} 
                            removeTodo={removeTodo}
                            toggleTodo={toggleTodo}
                            editTodo={editTodo}
                        />
                        {idx < todos.length - 1 && <Divider />}
                    </Fragment>
                ))}
                </List>
            </Paper>
        );
    }
    return null;
    
};

export default TodoList;