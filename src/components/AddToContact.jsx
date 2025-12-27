import React from "react";
import { IoIosStarOutline } from "react-icons/io";

const AddToContact = ({getDataForm,setData,data}) => {

  
function submitEventHandler(e){
  e.preventDefault();
  getDataForm(data)
  setData({profilePic:"", firstName:"",lastName:"",mobileNo:""})
  
} 


function typeEventHanlder(e){
  
  if(e.target.id==="firstName"){
       setData((prev)=>({...prev,firstName:e.target.value}))
  }

  if(e.target.id==="lastName"){
        setData((prev)=>({...prev,lastName:e.target.value}))
  }


  if(e.target.id==="mobileNo"){
        setData((prev)=>({...prev,mobileNo:e.target.value}))
  }


  if(e.target.id==="profilePic"){
      const file = e.target.files[0];
      if (!file) return;
      setData((prev)=>({...prev,profilePic:URL.createObjectURL(file)}));
  }

}


  return (
    <div className="add-to-contact w-87.5 flex flex-col justify-center items-center p-5 rounded-lg bg-zinc-700 text-white">
      <div className="header w-full flex justify-between items-center-safe">
        <span className="font-normal text-xl tracing-wider">
          Add to contacts
        </span>
        <span className="flex gap-4 items-center">
          <IoIosStarOutline size={"1.3em"} />
          <button  form="profileForm" type="submit" className="px-5 py-2 rounded-full bg-blue-400 border-none text-white cursor-pointer text-sm">
            Save
          </button>
        </span>
      </div>

      <form onSubmit={submitEventHandler} id="profileForm" className="w-[90%] mt-10 flex flex-col gap-5">
        <input
          id="firstName"
          className="w-full px-3 py-3.5 border border-white rounded-md outline-none"
          type="text"
          maxLength={15}
          required
          value={data.firstName}
          onChange={typeEventHanlder}
          placeholder="First name"
        />
        <input
          id="lastName"
          className="w-full px-3 py-3.5 border border-white rounded-md outline-none"
          type="text"
          maxLength={15}
          required
          value={data.lastName}
          onChange={typeEventHanlder}
          placeholder="Surname"
        />

        <fieldset className="field w-full border border-white rounded-md">
          <legend className="text-sm">Phone (Mobile)</legend>

            <div className="inner py-2 px-2 flex gap-1 items-center">
                <span className="whitespace-nowrap">🇮🇳 +91</span>
                <input onChange={typeEventHanlder} id="mobileNo" value={data.mobileNo} maxLength={10}  className="w-full text-white border-none outline-none" required  type="tel" />
              </div>


        </fieldset>
        
        
        <label className="px-3 py-2 w-fit bg-zinc-400 rounded-md cursor-pointer mt-6 text-sm text-black font-medium">
        <input 
         id="profilePic"
         onChange={typeEventHanlder}
         value={setData.profilePic}
        type="file"
        accept="image/png,image/jpeg,image/jpg"
        className="hidden" />
        upload profile image
        </label>

      </form>
    </div>
  );
};

export default AddToContact;
