import React, { Fragment, useContext, memo } from "react";
import useToggleState from "../hooks/useToggleState";
import { DispatchContext } from '../context/todosContext';
import EditTodoForm from "./EditTodoForm";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const Todo = ({ id, task, completed }) => {
    const dispatch = useContext(DispatchContext);
    const [isEditing, toggle] = useToggleState(false)
    return (
        <ListItem style={{ height: "64px" }}>
        { isEditing ? (
            <EditTodoForm id={id} task={task} toggleEditForm={toggle} />
        ) : (
            <Fragment>
                <Checkbox tabIndex={-1} checked={completed} onClick={() => dispatch({ type: 'TOGGLE', id })} />
                <ListItemText style={{textDecoration: completed && "line-through" }}> 
                    {task}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label='Delete' onClick={() =>  dispatch({ type: 'REMOVE', id })} >
                    <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label='Edit' onClick={toggle} >
                    <EditIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </Fragment>
        )}
        </ListItem>
        
    );
};

export default memo(Todo);