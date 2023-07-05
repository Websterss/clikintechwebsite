import React, {useState} from 'react';
import "./Login.css";
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

            if(email === "clikintechweb@gmail.com"){
                console.log("success");
            }else{
                console.log("This Email Not Valid")
            }

    const login = () => {
        const post = axios.post(`http://localhost:5000/signin`,{
         email: email, password: password
    })
    if(post.status === 200){
        console.log("success");
        window.location.href="/BlogMangement"
    }else{
       console.log("error")
    }
    }
    
    return (
    <div className='login'>
        <div className='login1'>
            <form className='login2' onSubmit={login}>
            <h4 className='login3'>Login</h4>
            <input className='logininput1' type="email" placeholder='Enter Email' required/>
            <input className='logininput2' type="password" placeholder='Enter Password' required/>
            <button type="submit" className='loginbutton'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login;