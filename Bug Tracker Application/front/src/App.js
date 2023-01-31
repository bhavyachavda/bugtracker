// import logo from './logo.svg';
// import './App.css';
// import React, {useEffect, useState} from 'react';

// function App() {

//   const handleSubmit =() =>{

//   }

//   const [mess, setMess] = useState('');
//   const date = new Date();
//   const showDate = date.getDate()+ '/'+(date.getMonth() + 1)
//    + '/' + date.getFullYear();
//   const showTime = date.getHours()
//     + ':' + date.getMinutes()
//     + ':' + date.getSeconds();


//   useEffect(()=>{
//     fetch("http://localhost:9000/mess")
//     .then((res)=> res.json())
//     .then((data) => setMess(data.mess));
//   },[]);
//   return (
//     <div className="App">
//      {/* <h1>{mess}</h1> */}
//      <form onChange={handleSubmit}>
//       <label >Title
//       <input type="text" className="form-control" name="title"/><br/>
//       </label>
//       <label>Descrption: 
//       <input type ="text" className="form-control" name="Descrption"/><br/>
//       </label>
//       <label> Time :
//       <input type ="text" className="form-control" name="Time" value={showTime}/><br/>
//       </label>
//       <label> Date : 
//       <input type="text" className="form-control" name="Date" value={showDate}/><br/>
//       </label>
//       <label>Assignee : 
//       <input type="text" className="form-control" name="Assignee"/><br/>
//       </label>
//       <label>
//       <input type="button" name="submit" value="submit" on/>
//       </label>
//      </form>
//     </div>
//   );
// }

// export default App;


import React from 'react'
import Bugform from './Bugform'

const App = () => {
   return (
   <div>
    <Bugform />
    </div>
    )
  }
    
export default App
