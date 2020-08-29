import React from 'react';
import './App.css';
//import Form from './Componets/Form';
import LifeCycleA from './Componets/LifeCycleA';

//import Stylesheet from './Componets/StyleSheet'
//import Inline from './Componets/Inline';

//import './styleApp.css'

//import styles from './appStyles.module.css'
//import NameList from './Componets/NameList';
//import ParentComponent from './Componets/ParentComponent';
//import App1 from './service/App1'
// import Counter from './Componets/Counter';
// import State from './service/State';
// import FunctionClick from './Componets/FunctionClick';
// import ClassClick from './Componets/ClassClick';
// import EventBind from './Componets/EventBind';
//import UserGreeting from './Componets/UserGreeting'  
  function App() {
  return (
    <div className="App">
      {/*<App1 />
      <State />
      <hr />
      <Counter />
      <hr />
      <FunctionClick />
      <hr />
      <ClassClick />
      <hr />
      <EventBind/>
      <ParentComponent/>
        <UserGreeting/>
      <NameList/>
      <Stylesheet primary={true}/>
      <Inline />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Form/>
      */}

      <LifeCycleA/>
      

    </div>
  );
}

export default App;
