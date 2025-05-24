import React from 'react'
import { useLocation } from 'react-router'
export default function CourseDetail() {
    var location =  useLocation()
    var data = location.state
//      const location = useLocation()
//   const { from } = location.state
  return (
    <div className='flex w-full mx-2 mt-8 '>
        <div className='w-1/2'>img <img src = {data.cimg}></img></div>
        <div className='w-1/2'>{data.desc}</div>

    </div>
  )
}
