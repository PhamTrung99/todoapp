import React from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';

import { taskName } from '../reducer/taskName.todo';


export default function TodoItem({ item, dispatch }) {

    const handleDeleteTask = (idItem) => dispatch({
        type: taskName.TASK_REMOVE,
        query: idItem
    });

    const handleReAddTask = (idItem) => dispatch({
        type: taskName.TASK_RE_ADD,
        query: idItem
    })

    return (
        <>
            <ListItem button>
                {item.complete ? <ListItemText secondary={item.title} /> : <ListItemText primary={item.title} />}
                <IconButton edge="end" aria-label="delete" >
                    {item.complete || <DeleteIcon onClick={() => handleDeleteTask(item.id)} />}
                    {item.complete && <AddCircleOutlineIcon onClick={() => handleReAddTask(item.id)} />}
                </IconButton>
            </ListItem>
        </>
    )
};
