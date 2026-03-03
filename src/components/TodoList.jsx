import { useState } from "react"
import TodoItem from "./TodoItem"

function TodoList(props)
{
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    return(
               <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
                        <h1 className="text-2xl font-medium">ToDo List</h1>
                        {/* <p>You havn't added any activity yet</p> */}

                        {activityArr.length===0?<p>You havn't added any activity yet</p>:""}

                        {/* <p>You havn't added any activity yet</p>
                        <p>1. go for a walk</p>
                        <p>2. have breakfast</p> */}

                        {/* <p>{activityArr[0].activity}</p>
                        <p>{activityArr[1].activity}</p> */}


                        <h1 className="text-1xl font-medium">ToDo Item</h1>
                        {
                            activityArr.map(function(item,index){
                                //    return  <p> {index+1}. {item.activity}</p>
                                return <TodoItem id={item.id} item={item} index={index} 
                                activityArr={activityArr} 
                                setActivityArr={setActivityArr} />
                            }
                            )
                        }
                        
               </div>
    )
}

export default TodoList