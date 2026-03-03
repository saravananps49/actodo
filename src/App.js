import Header from "./components/Header";
// import Card from "./Card";
import TodoContainer from "./components/TodoContainer"
// import TodoItem from "./components/TodoItem"
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import { useState } from "react";
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";

// function App() {
//   return (
//             // <h1 className='bg-red-50 p-4 text-2xl'>Hello</h1>
//             <div className="bg-black p-16">
//                <div className="bg-[#EFEFEF] p-10 border rounded-md">

// {/* Header COMPONENT */}             
//                 <Header/>

// {/* CARD COMPONENT */}
// <div className="flex justify-between gap-7 my-5 flex-wrap">
//                 <div style={{backgroundColor:"#8272DA"}} className="px-10 py-5 border rounded-md text-center flex-grow">
//                      <h1 className="font-medium text-2xl">23</h1>
//                      <p>Chennai</p>
//                 </div>

//                 <div style={{backgroundColor:"#FD6663"}} className="px-10 py-5 border rounded-md text-center flex-grow">
//                      <h1 className="font-medium text-2xl">February 24</h1>
//                      <p>10:04:00</p>
//                 </div>

//                 <div style={{backgroundColor:"#FCA201"}} className="px-10 py-5 border rounded-md text-center flex-grow">
//                      <h1 className="font-medium text-2xl">Built using</h1>
//                      <p>React</p>
//                 </div>          
// </div>

//                  {/* <div>
//                     <div>AddTodoForm</div>
//                     <div>TodoList</div>
//                  </div> */}

// {/* TodoContainer COMPONENT */}                 
//                <TodoContainer/>




//                {/* <TodoItem/> */}


//                </div>
//             </div>

       
//   );
// }

export default App;


function App()
{

    const [users, setUsers] = useState(
    [
       {
        username:"john",
        password:"123"
       },

       {
        username:"abc",
        password:"456"
       }
    ]
    )

  return(
  <div>
    <BrowserRouter> 

    <Routes>

    {/* <Route path='/login' element={<Login/>}></Route> */}
    <Route path='/' element={<Login users={users} setUsers={setUsers} />}></Route>                          
    <Route path='/signup' element={<Signup users={users} setUsers={setUsers} />}></Route>
    <Route path='/landing' element={<Landing/>}></Route>
    
    </Routes>

    </BrowserRouter>


  </div>
  )
}
