import './App.css';
import {useState} from 'react';
// import { user } from './user';


function App() {
 const [count, setCount] = useState (0);
   
   const increase = () => {
      setCount(count +1);
  };

  const decrease = () => {
    setCount(count -1);
};

const setToZero = () => {
  setCount(0);
};

 return (
 <div className='App'>
    <button onClick={increase}>increase</button>
    <button onClick={decrease}>decrease</button>
    <button onClick={setToZero}>Set To Zero</button>

    {count}
 </div>
 );
}

export default App;

