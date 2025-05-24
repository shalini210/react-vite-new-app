import React from 'react'
import { courses } from './data'
export default function Fullstack() {
    let fullstackcourses = courses.filter((c)=>c.courseName=="Full Stack")
    const ui =fullstackcourses.map((course)=>
        {
            return <div className='w-1/4 flex flex-col'>
                
                <img src={course.img} className='w-full aspect-square border rounded-2xl' alt="" />
                <div className='text-2xl font-bold'>{course.courseName}</div>
                <div>{course.description}</div>
    
            </div>
        })
  return (
    <div className='flex flex-wrap gap-5'>
        {ui}
    </div>
  )
}
