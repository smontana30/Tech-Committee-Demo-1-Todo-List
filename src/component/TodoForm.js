import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// prop(aka properties) that we are passing to this component from the app file
// think of these props as parameter to a function that we can use and manipulate.
function TodoForm({addTodo}){
    const [value, setValue] = useState('');

    const createTodo = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    }

    const handleSubmit = () => {
        if (!value)
            return;
        addTodo(value);
        setValue('');
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            {/* OnChange is a fucntion that is trigger with every change that is happens to our text
            field/input bar. On every change this function will be triggered and will call the 
            createTodo method */}
            <TextField 
                placeholder='Enter Todo'
                value={value}
                onChange={(e) => createTodo(e)}
                variant='outlined'
                style={{marginRight: '1vh'}}
            />
            {/* Similar to onChange, onClick is a function that is trigger whenever the user
            clicks on this button so on click we call this handleSubmit function */}
            <Button variant='outlined' onClick={handleSubmit}>Add Todo</Button>
        </div>
    );
};

export default TodoForm;