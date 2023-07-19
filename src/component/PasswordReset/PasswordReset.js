import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

function PasswordReset() {

    const [validUrl, setValidUrl] = useState(false);
	const [password, setPassword] = useState("");
	const param = useParams();
	const url = `https://clikintechwebsite.onrender.com/forgot-password/${param.id}/${param.token}`;


    const notify = () => toast.success('Password Change Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
   
        const forgotpasswordunsuccess = (data) => toast.error(data, {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
         })


	useEffect(() => {
		const verifyUrl = async () => {
			try {
				await axios.get(url);
				setValidUrl(true);
			} catch (error) {
				setValidUrl(false);
			}
		};
		verifyUrl();
	}, [param, url]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post(url, { password });
         notify()
      setTimeout(() => {
        window.location.href = "/";
      }, 5000)
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
        forgotpasswordunsuccess(error);
			}
		}
	};


  return (
    <Fragment>
    {validUrl ? (
        <div>
    <div className='login'>
        <div className='login1'>
            <form className='login2' onSubmit={handleSubmit}>
            <h4 className='login3'>Forgot Password</h4>
            <input className='logininput1' type="password" placeholder='Enter Email' value={password} onChange={(e) => setPassword(e.target.value)} required/>
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
        </div>
    ) : (
        <h1>404 Not Found</h1>
    )}
</Fragment>
  )
}

export default PasswordReset;