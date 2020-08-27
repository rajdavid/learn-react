import React from 'react';
import './App.css';
//import { Hello } from './Componets/Hello';
/*import Counter from './Componets/Counter'*/
import { Greet } from './Componets/Greet';
import { Welcome } from './Componets/Welcome';
function App() {
  return (
    <div className="App">
      hello to new world
      <hr />
      <br/>
      <Greet name="Bruce" heroName=" Batman">
        <p>this is childeren props</p>
      </Greet>

      <Greet name="Clark" heroName="Batman">
        <button>Action</button>
      </Greet>
      <br/>
      <br/>
      
      <hr/>
      <Welcome name="Bruce"  heroName="Batman"/>
      <Welcome name="Clark" heroName="Superman"/>
      
      
      {/*<Hello/>*/}
      {/*<Counter />
      <br/>*/}
      
    </div>
  );
}

export default App;
