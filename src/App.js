import React from 'react';
import './App.css';
//import App1 from './service/App1'
import Counter from './Componets/Counter';
import State from './service/State';
import FunctionClick from './Componets/FunctionClick';
import ClassClick from './Componets/ClassClick';
import EventBind from './Componets/EventBind';
  
  function App() {
  return (
    <div className="App">
      {/*<App1 />*/}
      <State />
      <hr />
      <Counter />
      <hr />
      <FunctionClick />
      <hr />
      <ClassClick />
      <hr />
      <EventBind/>
    </div>
  );
}

export default App;
