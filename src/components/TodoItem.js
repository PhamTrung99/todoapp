import React from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@material-ui/core/IconButton';

import { taskName } from '../reducer/taskName.todo';


export default function TodoItem({ item, dispatch}) {

    const handleRemoveTask = (idItem) => dispatch({
        type: taskName.TASK_REMOVE,
        query: idItem
    });

    const handleReAddTask = (idItem) => dispatch({
        type: taskName.TASK_RE_ADD,
        query: idItem
    });

    const handleDeleteTask = (idItem) => dispatch({
        type: taskName.TASK_DELETE,
        query: idItem
    });

    return (
        <>
            <ListItem button>
                {item.complete ? <ListItemText secondary={item.title} /> : <ListItemText primary={item.title} />}
                <IconButton edge="end" >
                    {item.complete || <CheckCircleOutlineIcon onClick={() => handleRemoveTask(item.id)} />}
                    {item.complete && <AddCircleOutlineIcon onClick={() => handleReAddTask(item.id)} />}
                </IconButton>
                <IconButton>
                <DeleteOutlineIcon onClick={()=>handleDeleteTask(item.id)}/>
                </IconButton>
            </ListItem>
        </>
    )
};
