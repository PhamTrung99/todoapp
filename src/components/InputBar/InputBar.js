import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import './style.inputBar.css';
import { taskName } from '../../reducer/taskName.todo';

export default function InputBar({ dispatch, idMax }) {
    const [inputText, setinputText] = useState('');

    const handleAddTask = (title) => {
        let newId = idMax()+1;
        dispatch({
            type: taskName.TASK_ADD,
            query: inputText,
            newId: newId
        })
        resetValue();
    };

    const resetValue = () => setinputText('');

    const hanleOnChangeInput = (e) => {
        setinputText(e.target.value)
    };

    


    return (
        <>
            <TextField
                id="standard-full-width"
                label="ADD TASK"
                style={{ margin: 10 }}
                placeholder="Task Name"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                value={inputText}
                onChange={hanleOnChangeInput}
            />
            <div className="div-input-bar">
               {inputText &&  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<SaveIcon />}
                    onClick={() => handleAddTask()}
                >
                    Save
                </Button>}
            </div>

        </>
    )
};


