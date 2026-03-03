import { useState } from "react"
import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
// import TodoItem from "./TodoItem"

function TodoContainer()
{
     const [activityArr, setActivityArr] = useState([

        {
            id:1,
            activity:"go for a walk"
        },

        {
            id:2,
            activity:"have breakfast"
        },

        {
            id:3,
            activity:"take a shower"
        }
    ])

    return(
        <div>

            <div className="flex gap-5 flex-wrap">

                    {/* <div className="flex flex-col gap-3">
                        <h1 className="text-2xl font-medium">Manage activities</h1>

                        <div>
                        <input type="text" className="border border-black bg-transparent p-1" placeholder="Next activity?"/>
                         <button className="bg-black text-white p-1 border border-black ">Add</button>
                        </div>

                    </div> */}

                    <AddTodoForm activityArr={activityArr} setActivityArr={setActivityArr} />

                    <TodoList activityArr={activityArr} setActivityArr={setActivityArr} />


                    
           </div>

        </div>
    )
}

export default TodoContainer