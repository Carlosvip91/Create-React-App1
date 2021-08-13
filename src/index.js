// Import the React and ReactDOM libraries
import { blue, white } from 'chalk';
import React from 'react';
import ReactDOM from 'react-dom';


// Create a React Component
const App = () => {
const buttonText = { text: 'Click me bro!'};
const labelText = 'Enter name:';

    return  (
    <div>
        <label class="label" for="name">
            {labelText}
        </label>
        <input id="name" type="text" />
        <button style={{backgroundColor: 'blue', color: 'white'}}>
            {buttonText.text}
        </button> 
    </div>
        )
}

// Take the React component and show it on the screen
ReactDOM.render(
    <App />, document.querySelector('#root')
);