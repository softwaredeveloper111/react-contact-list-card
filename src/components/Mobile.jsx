import React from 'react'
import Card from './Card'

const Mobile = ({allUsers}) => {
  return (
    <div className='mobile w-87.5 rounded-lg bg-zinc-200 flex flex-col gap-5 p-3 grow overflow-y-auto overflow-x-hidden'>
    
      {allUsers.map((item,index)=><Card key={index} item={item}/>)}
    </div>
  )
}

export default Mobile