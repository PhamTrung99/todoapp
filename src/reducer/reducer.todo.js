import { taskName } from './taskName.todo';


export default function reducer(state, action) {
    switch (action.type) {
        case taskName.TASK_ADD:
            return [...state, { id: 4, title: 'New task', complete: true }];
        case taskName.TASK_REMOVE:
            return state.map(item => item.id === action.query ? { ...item, complete: true } : item);
        case taskName.TASK_RE_ADD:
            return state.map(item => item.id === action.query ? {...item, complete: false} : item);
        
        default: 
            throw new Error();
    }
}