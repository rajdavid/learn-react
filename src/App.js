import React from 'react';
import './App.css';
import { Hello } from './Componets/Hello';
/*import Counter from './Componets/Counter'
import { Greet } from './Componets/Greet';
import { Welcome } from './Componets/Welcome';*/
function App() {
  return (
    <div className="App">
      hello to new world
      <hr />
      <br/>
      {/*<Greet />*/}
      <Hello/>
      {/*<Counter />
      <br/>
      <Welcome/>*/}
    </div>
  );
}

export default App;
