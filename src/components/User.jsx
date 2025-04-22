import React from 'react'

export default function User(props) {
  return (
    <div className='flex flex-col gap-2 border p-5
    border-gray-300 hover:border-orange-400 
    hover:bg-gray-300'>
        <img src={props.photo} className='w-32 aspect-square rounded-3xl' alt="" srcset="" />
        <div className='text-xl font-bold'>{props.name}</div>
        <div>{props.contactno}</div>
    </div>
  )
}
