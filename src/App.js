import Todo from './views/Todo'
import { dataContext } from './stores/context.todo';

const data = [
  { id: 1, title: 'Read book', complete: true },
  { id: 2, title: 'Have breakfast', complete: false },
  { id: 3, title: 'Dringking Coffee', complete: false },
];

function App() {

  return (
    <div className="container">
      <dataContext.Provider value={data}>
      <Todo></Todo>
      </dataContext.Provider>
    </div>
  );
}

export default App;
