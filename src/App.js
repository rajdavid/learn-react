import React from 'react';
import './App.css';
//import App1 from './service/App1'
import Counter from './Componets/Counter';
import State from './service/State';
  
  function App() {
  return (
    <div className="App">
      {/*<App1 />*/}
      <State />
      <hr />
      <Counter/>
    </div>
  );
}

export default App;
