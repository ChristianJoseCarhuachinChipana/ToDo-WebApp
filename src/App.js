import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';
import './App.css';

const defaultTodos = [
  { text:'ToDo 1', completed:true},
  { text:'ToDo 2', completed:false},
  { text:'ToDo 3', completed:true},
  { text:'ToDo 4', completed:false},
]

function App() {
  return (
    <>
      
      <TodoCounter completed={3} total={8} />
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton/>
      
    </>
  );
}

export default App;
