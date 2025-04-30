import React from 'react'
import User from './User'
import i1 from "../assets/images/i1.jpg"
import i2 from "../assets/images/i2.png"
import i3 from "../assets/images/i3.jpg"

export default function Users() {
    
  let users = [{photo:i1, name:"John Capner", contactno:"987987997"},
              {photo:i2, name:"Ron ", contactno:"994541527"},
              {photo:i3, name:"Maria ", contactno:"798512135"},
              {photo:i1, name:"Anthoney", contactno:"88977997"}]

    let usersUi = users.map((user) => {
    return <User photo={user.photo} name={user.name} 
    contactno={user.contactno}></User>
  }
  )
  return (
    <>
    {usersUi}</>
  )
}
