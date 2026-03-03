import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Signup(props)
{
//   return(<h1>Signup</h1>)

const [userInput, setUserInput] = useState("")
const [userPassword, setUserPassword] = useState("")
// const [confirmPassword, setConfirmPassword] = useState("")

const users = props.users
const setUsers = props.setUsers

const navigate = useNavigate()

function handleUserInput(event)
{
   setUserInput(event.target.value)
}

function handleUserPassword(event)
{
    setUserPassword(event.target.value)
}

function addUser()
{
    setUsers([...users,{username:userInput, password:userPassword}])
    navigate("/")

}

// function handleConfirmPassword(event)
// {
//     setConfirmPassword(event.target.value)
// }

// function handleCheck()
// {
//     return(
//         users.forEach(function(item)
//         {
//            if(item.username === userInput && item.password === userPassword)
//            {
//             console.log("")
//            }
//         }
//         )
//     )
// }

return(
    <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">

            <h1 className="font-medium text-3xl">Hey Hi</h1>
            <p>You can signup here :) </p>

    {/* <div className="text-wrap"> */}
    <div className="flex flex-col gap-2 my-2">
            <input 
            className="w-52 border-black p-1 bg-transparent border rounded-md" 
            placeholder="username"
            value={userInput}
            onChange={handleUserInput}>
            </input>

            <input 
            className="w-52 border-black p-1 bg-transparent border rounded-md" 
            placeholder="password"
            value={userPassword}
            onChange={handleUserPassword}>
            </input>

            {/* <input 
            className="w-52 border-black p-1 bg-transparent border rounded-md" 
            placeholder="confirm password"
            value={confirmPassword}
            onChange={handleConfirmPassword}>
            </input> */}

            {/* <button className="w-52 bg-yellow-400 p-0.5 border rounded-md">Sign Up</button> */}

            <button 
            className=" bg-yellow-500 w-24 p-1 rounded-md"
            onClick={addUser}>
                Sign Up
            </button>

            <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>

    </div>        

        </div>

    </div>
)
}

export default Signup