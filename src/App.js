import { useState } from 'react';
import './App.css';
import Counter from './counter';

function App() {
   const[darkMode, setDarkMode]= useState(false);
  return (
    <div className = {darkMode ?  'container dark' : 'container light'}>
       <h1>Click Counter App</h1>
       <Counter/>
       <button className="btn"onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'switch to Light Mode' : 'Switch to darkMode'}
       </button>
   </div>    
  );
}

export default App;
