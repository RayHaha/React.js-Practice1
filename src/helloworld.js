// we need to import first
import React from 'react';
import ReactDOM from 'react-dom';

// when you use const to declare variable
// it means that you're not going to change the value
// it's the final value of the variable
const App = () => {     // this is an arrow function in ES6
    return <h1>Hello world</h1>
}   // this is class, not an instance. use <App /> to turn it into an instance

// then we are going to find a place for the App
// document.querySelector('#root') will go and find the <div id="root"></div> in index.html
ReacrDOM.render(<App />, document.querySelector('#root'));

