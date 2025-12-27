import React, { useState } from 'react'
import AddToContact from './components/AddToContact'
import Mobile from './components/Mobile'


const App = () => {

  const [data,setData] = useState({profilePic:"", firstName:"",lastName:"",mobileNo:""})
  const [allUsers,setAllUsers] = useState([])


  function getDataForm(obj){
     
      setAllUsers((prev)=>[...prev,obj])
  }

 

  return (
    <div className='main w-full h-screen bg-zinc-100 flex items-center flex-col py-5 gap-5'>
         <AddToContact getDataForm={getDataForm} setData={setData} data={data}/>
         <Mobile allUsers={allUsers}/>
    </div>
  )
}

export default App