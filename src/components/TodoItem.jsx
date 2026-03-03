function TodoItem(props)
{
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    // setActivityArr([
    //     {
    //         id:6,
    //         activity:"Hello"
    //     }
    // ])

    function handleDelete(deleteId)
    {
        // console.log(deleteId)
        var tempArr = activityArr.filter(function(item)
        {
           if(item.id === deleteId)
           {
            return false
           }
           else
           {
            return true
           }
        }
        )

        setActivityArr(tempArr)
    }

    return(
        <div className="flex justify-between">
             <p>{props.index+1}.{props.item.activity}</p>
             <button onClick={()=>handleDelete(props.id)} className="text-red-500">Delete</button>
        </div>
    )
}

export default TodoItem