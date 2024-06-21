import React,{useState} from 'react'
import './Adduser.css'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Adduser() {

  let navigate=useNavigate();
  let{
    register,
    handleSubmit,
    formState:{errors},
  }=useForm();

  let [err,seterr]=useState("")
  let addNewUser=(newUser)=>{
    console.log(newUser)
    axios.post("http://localhost:4000/users",newUser)
    .then(response=>{
      if(response.status==201){
        seterr("");
        navigate("/users")
      }
    })
    .catch(err=>{
      //client side error i.e gives an error response
      if(err.response){
        seterr(err.message)
      }
      //client received a response and req was never left
      else if(err.request){
        seterr(err.message)
      }
      else{
        seterr(err.message) 
      }
    }
  )
  }
  return (
    <div className='adduser'>
      <p className='display-4 text-center'> ADD USER</p>

      {err.length!=0 && <p className='text-danger'>{err}</p>}
      <div className='row'>
        <div className='col-11 col-sm-8 col-md-6 mx-auto'></div>
        <form onSubmit={handleSubmit(addNewUser)}>
          <div className="mb-3">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" className='form-control' {...register("üsername",{required:true})}/>
           
           {errors.username?.type==="required" && <p className='text-danger'>*Name is Required</p>}
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className='form-control' {...register("password",{required:true})}/>
           
          </div>

          <div className="mb-3">
            <label htmlFor="email">EmailId</label>
            <input type="email" id="email" className='form-control' {...register("email",{required:true})}/>
           
          </div>

          <div className="mb-3">
            <label htmlFor="dob">DateOfBirth:</label>
            <input type="date" id="dob" className='form-control' {...register("dob",{required:true})}/>
           
          </div>
          
          <button className='btn btn-success' type="submit">Create New User</button>
        </form>


        </div>
     
    </div>
  )
}

export default Adduser