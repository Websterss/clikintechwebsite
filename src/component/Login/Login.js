import React, {useState} from 'react';
import "./Login.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


function Login() {

    
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const successnotify = (msg) => {
        toast.success(msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          })
       }
    
       const errornotify = (msg) => {
        toast.error(msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
       }

            

    
            const login = async(e) => {
                e.preventDefault();

                try {
                     const url = "http://localhost:5000/signin";
                     const  data  = await axios.post(url, {email, password});
                     console.log(data)
                    if(data.status === 201){
                     localStorage.setItem("keyid", data.data);
                     successnotify(data.data.message);
                     setTimeout(() => {
                     window.location.href="/BlogMangement";
                     }, 5000)
                     
                    }
                } catch (error) {
                    errornotify(error.response.data.message)
                    console.log(error.response.data.message)
                }
            

    };
    
    return (
    <div className='login'>
        <div className='login1'>
            <form className='login2' onSubmit={login}>
            <h4 className='login3'>Login</h4>
            <input className='logininput1' type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <input className='logininput2' type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
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

export default Login;