import React, {  } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import './Todos.css';

// prop(aka properties) that we are passing to this component from the app file
// think of these props as parameter to a function that we can use and manipulate.
function Todos({index, todo, removeTodo, markTodo}){

    return (
        <div className='container'>
            <ListItem divider className='list' >
                <ListItemText 
                    style={{textDecoration: todo.isComplete ? 'line-through' : '', fontSize: '40vh'}}
                    primary={todo.text}
                ></ListItemText>
                <IconButton variant='outlined' onClick={() => removeTodo(todo.text)}>
                    <DeleteIcon className='trash'></DeleteIcon>
                </IconButton>
                <IconButton  variant='outlined' onClick={() => markTodo(index)}>
                    <CheckIcon className='check'></CheckIcon>
                </IconButton>
            </ListItem>
        </div>
    );
};

export default Todos;