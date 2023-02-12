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

//   const user = [
//     { name: "pedro", age :20},
//     { name: "mohit", age :21},
//     { name: "rohit", age :24},
//   ];

//   return (
//     <div className="App">
//       {user.map((user,key) => {
//           return <user name={user.name} age ={user.age} />;
//       })}
//     </div>
//   );

// }


  // const age = 17;

  // // if (age>=18){
  // //    return <h1>Mature</h1>;
  // // } else {
  // return(
  //  <div className='App'>{age >= 18 ? <h1>Mature</h1> : <h1>Imature</h1>}
  //  </div>
  // );
  // }
  