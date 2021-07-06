import React, { useContext,useReducer } from 'react';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import TodoItem from '../components/TodoItem';
import { dataContext } from '../stores/context.todo';
import reducer from '../reducer/reducer.todo';


export default function Todo(params) {
    const data = useContext(dataContext);
    const [todoState, dispatch] = useReducer(reducer, data);

    return (
        <>
            <TextField
                id="standard-full-width"
                label="Search"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                // helperText="Full width!"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />

            <List component="nav" aria-label="secondary mailbox folders">
                {
                    todoState.map(item => <TodoItem item={item} dispatch={dispatch}/>)
                }
            </List>
        </>
    )
};
