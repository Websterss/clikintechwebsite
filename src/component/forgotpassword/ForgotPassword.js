import React, {useState} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function ForgotPassword() {

    const [email, setEmail] = useState("");

 
    const notify = () => toast.success('Email Send Successfully...', {
     position: "top-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "colored",
     });

     const forgotpasswordsuccess = (data) => toast.error(data, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      })
 
    const post = async(e) => {
     e.preventDefault();
 
     try {
         const posts = await axios.post(`https://clikintechwebsite.onrender.com/forgot-password/post`, 
         { email});
         if(posts.status === 201){
           notify();
         } 
       return posts;
       } catch (error) {
       if(error.response.status === 500){
        forgotpasswordsuccess("Error"); 
       }
         
     }
    }

  return (
    <div className='login'>
        <div className='login1'>
            <form className='login2' onSubmit={post}>
            <h4 className='login3'>Forgot Password</h4>
            <input className='logininput1' type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <button type="submit" className='loginbutton'>Submit</button>
            </form>
        </div>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </div>
  )
}

export default ForgotPassword