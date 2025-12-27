import React from 'react'
import { FaPhone } from "react-icons/fa6";
import avatar from "../assets/avatar.png";

const Card = ({item}) => {
  let {profilePic,firstName,lastName,mobileNo} = item
 
  return (
    <div className='card w-full bg-zinc-800 text-white flex justify-between items-center rounded-lg px-3 py-2'>
       <div className='flex gap-2 items-center'>
        <img className='h-11.25 w-11.25 rounded-full object-cover object-top' src={profilePic || avatar} alt="" />
        <div className='flex flex-col gap'>
          <span>{firstName} {lastName}</span>
          <span className='text-sm text-zinc-300'>Mobile +91 {mobileNo}</span>
        </div>
       </div>
       <span><FaPhone color='white' size={"1.3em"}/></span>
    </div>
  )
}

export default Card