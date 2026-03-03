import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


function Login(props)
{
  // return(<h1>Login</h1>)
  const [enteredUname, setEnteredUname] = useState("")
  const [enteredPword, setEnteredPword] = useState("")
  // const [users, setUsers] = useState(
  //   [
  //      {
  //       username:"john",
  //       password:"123"
  //      }
  //   ]
  //   )
  const [regUser, setRegUser] = useState(true)
  const navigate = useNavigate()
  
     const users = props.users
  // const setUsers = props.setUsers
  


 
 function handleUserInput(event)
    {
       setEnteredUname(event.target.value)
    }

 function handlePwordInput(event)
 {
      setEnteredPword(event.target.value)
 }

  
 function checkUser()
    {

      var userFound = false

      users.forEach(function(item)
      {
         if(item.username === enteredUname && item.password === enteredPword)
         {
          // return true
          console.log("Login Successful")
          userFound = true
          navigate("/landing",{state:{user:enteredUname}})

         }
         
        //  else
        //  {
        //   // return false
        //   console.log("Login Failed")
        //   setRegUser(false)
        //  }

        if(userFound === false)
        {
          console.log("Login Failed")
          setRegUser(false)
        }

      }
      )
    }

  return(
    <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">

            <h1 className="font-medium text-3xl">Hey Hi</h1>
            {regUser? <p>You can Login here :)</p> : <p className="text-red-500">Please signup before login!</p>}
            

    {/* <div className="text-wrap"> */}
    <div className="flex flex-col gap-2 my-2">
            <input 
            className="w-52 border-black p-1 bg-transparent border rounded-md" 
            placeholder="username"
            value={enteredUname}
            onChange={handleUserInput}>
            </input>

            <input 
            className="w-52 border-black p-1 bg-transparent border rounded-md" 
            placeholder="password"
            value={enteredPword}
            onChange={handlePwordInput}>
            </input>

            {/* <input 
            className="w-52 border-black p-1 bg-transparent border rounded-md" 
            placeholder="confirm password">
            </input> */}

            {/* <button className="w-52 bg-yellow-400 p-0.5 border rounded-md">Sign Up</button> */}

            <button 
            className=" bg-[#8272DA] w-24 p-1 rounded-md"
            onClick={checkUser}>
              Login
            </button>

            <p>Don't have an account yet? <Link to={"/signup"} className="underline">Sign Up</Link></p>

    </div>        

        </div>

    </div>
  )
}

export default Login