import React, { useState } from 'react'
import { courses } from './data'
import { Link } from 'react-router'
import CourseDetail from './CourseDetail'
export default function All() {
    // alert("here")
    const coursesui =courses.map((course)=>
    {
        return <div className='w-1/4 flex flex-col'>
            
            <img src={course.img} className='w-full aspect-square border rounded-2xl' alt="" />
            <div className='text-2xl font-bold'>{course.courseName}</div>
            <div>{course.description}</div>
<Link to="/CourseDetail"
 state={{ cimg:course.img,desc:course.description }}>Read More</Link>

        </div>
    })
  return (
    <div className='flex flex-wrap gap-5'>
        {coursesui}
    </div>
  )
}
