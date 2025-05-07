import React, { useState } from 'react'
export default function Taskcomponent() {
    const [taskname,settaskname] = useState("")
    const [taskui,settaskui]= useState()
    // let Tasks  = []    
    const [Tasks,setTasks]= useState([])
    let addTask = ()=>
    {
        if((Tasks.findIndex((t)=>t.name==taskname))!=(-1))
        {
            alert("already present")
            return
        }
        let len = Tasks.length;
        let id1 = 1;
        if(Tasks.length>0)
        {
            id1=(Tasks[len-1].id)+1        
        }      
        let t = {id:id1,name:taskname,status:'Incomplete'}
        Tasks.push(t)
        showTask()
    }
    let deleteTask=(id)=>
    {
        let index = Tasks.findIndex((t)=>t.id ==id )
        Tasks.splice(index,1)
        showTask()
    }
    let updateTask=(id)=>
        {
            let index = Tasks.findIndex((t)=>t.id ==id )
            Tasks[index].status="Complete"
            showTask()
        }
    let showTask = ()=>
    {
        let tempary =  Tasks.map((t)=>{
            let cname = "orange"
            if(t.status == "Complete")
            {cname="yellowgreen"}
        return <tr className='text-center text-black' style={{backgroundColor:cname}}>
            <td className='border'>{t.id}</td>
            <td className='border'>{t.name}</td>
            <td className='border'>{t.status}</td>
            <td className='border'><input type="button" value="Delete"
            onClick={()=>deleteTask(t.id)}  //add a deleteitem(id)on click
            className='bg-red-600 text-white' /></td>
            <td className='border'><input type="button" 
              onClick={()=>updateTask(t.id)} 
              value="Complete" className='bg-green-600 text-white' /></td>
            </tr>
        })
        settaskui(tempary)
    }

  return (
    <div className='flex w-1/2 mx-auto mt-5 flex-col justify-center  gap-3
    items-center border shadow-2xl shadow-amber-500 py-4'>
        <h1 className='text-orange-500'>Taskcomponent</h1>
        <div className='w-full flex justify-center gap-2'>
<label htmlFor="">Enter Task: </label>
<input type="text" className='border-2'
 onBlur={(e)=>settaskname(e.target.value)}/>
 </div>
 <div>
 <input type='button' className='bg-blue-400 px-5 rounded-2xl'
            value="Add" onClick={()=>addTask()}/>
        </div>
<div className='text-red-500 '> 
    <table className='w-full'>
        <thead className='w-full'><tr >
        <th className='border'>Id</th>
            <th className='border'>Task</th>
         <th className='border'>Status</th>
          <th className='border'>Delete</th>
           <th className='border'>Update</th></tr></thead>
        <tbody>
{taskui}
        </tbody>
    </table>
</div>
    </div>
  )
}
