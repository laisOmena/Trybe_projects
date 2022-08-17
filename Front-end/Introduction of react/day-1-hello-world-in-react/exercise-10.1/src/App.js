import React, { Fragment } from 'react';
import './App.css';

const animes = ['One Piece', 'Hunter x Hunter', 'Fairy Tail', 'Naruto', 'Bleach'];
const Task = (props) => {
  return (
    <Fragment>
      <h1>list</h1>
      <ul>
        {props.value.map(task => <li>{task}</li>)}
      </ul>
    </Fragment>
  );
}

function App() {
  return (
    <div className="App">
      <Task value={animes} />
    </div>
  );
}

export default App;
