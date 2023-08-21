import logo from './logo.svg';
import './App.css';
import Search from './Components/Search';
import { useState } from 'react';
import Show from './Components/Show';

function App() {
  const [message,setmessage] = useState('');


  return (
    <div className="App">
      <header className="App-header">
        <Search message={message} setmessage={setmessage}/>
        <Show message={message}/>
      </header>
    </div>
  );
}

export default App;
