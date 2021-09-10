import './App.css';
import TodoForm from './component/TodoForm';
import Todos from './component/Todos';
import React, {useState} from 'react';
import List from '@material-ui/core/List';

function App() {
  // the structure of our todoList array: [{text: 'wash the dishes', isComplete: true}]

  // our state element our value that will be update and change throughout our project
  // we update our state variable using the setTodoList func
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    // we are proforming array destructing which will return a new array with a copy of 
    // all of the contents of the orginal todoList array and then add a new object to that returned array
    const newTodo = [...todoList, {text: todo, isComplete: false} ];
    console.log(newTodo);
    setTodoList(newTodo); 
  }

  const removeTodo = (todo) => {
    // todoList.filter will basically return an array with all of the element that satifies 
    // (el.text !== todo) condition so basically every element that's text doesn't the todo string will 
    // will be added and returned to our array.
    const filList = todoList.filter(el => el.text !== todo);
    console.log(filList);
    setTodoList(filList);
  }

  const markTodo = (index) => {
    let newTodo = [...todoList ]
    // what this does is that it toggles on and off the is complete boolean
    newTodo[index].isComplete = !newTodo[index].isComplete;
    setTodoList(newTodo);
  }

  return (
    <div className="App">
      <div className='header'>
        <h1>Todo</h1>
        <TodoForm addTodo={addTodo} />
      </div>
      
      <div >
        <List>
          {/* creates a new array with the result of what we are providing to the arrow function 
          in our case it returns an array of todo component */}
          {todoList.map((todo, index) => (
            // we are passing these function and state as props(parameters) to our todo component
            <Todos key={index} index={index} todo={todo} removeTodo={removeTodo} markTodo={markTodo} />
          ))}
        </List>
      </div>
      
    </div>
  );
}

export default App;
