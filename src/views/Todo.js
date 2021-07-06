import React, { useContext,useReducer } from 'react';
import List from '@material-ui/core/List';
import TodoItem from '../components/TodoItem';
import { dataContext } from '../stores/context.todo';
import reducer from '../reducer/reducer.todo';
import InputBar from '../components/InputBar/InputBar';


export default function Todo(params) {
    const data = useContext(dataContext);
    const [todoState, dispatch] = useReducer(reducer, data);

    const getIDMax = () => {
        let idArr = [0];
        todoState.map(item => idArr.push(+item.id));
        idArr.sort();
        return idArr.pop(); //Max value of ID in data
    }

    return (
        <>
            <InputBar dispatch={dispatch} idMax={getIDMax} ></InputBar>
            
            <List component="nav" aria-label="secondary mailbox folders">
                {
                    todoState.map(item => <TodoItem item={item} dispatch={dispatch} />)
                }
            </List>
        </>
    )
};
