import React, {useState} from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from "react-router-dom";



function BlogEdit() {


    const [title, setTitle] = useState("");

    const [description, setDescription]  = useState("");



     const { id } = useParams();
     

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
     };

    

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
     };
    

    


     const Blog = async(e) => {
      e.preventDefault();
      
      try {
        const post  = await axios.patch(`http://localhost:5000/api/update/${id}`, {
          title: title, description: description
        })
        if(post.status === 200){
           successnotify(post.data.message);
         window.location.href = "/BlogMangement"
        }
      } catch (error) {
        errornotify("Network Error")
        console.log(error);
      }
     }

   

  return (
    <div>
        <div className='blogform1'>
            <div className='blogform2'>
<form className='blogform3' onSubmit={Blog}>
<h4 className='blogform10'>Blog Post</h4>
                 <input type="text" className='blogform4' placeholder='Enter Title' value={title} onChange={(e) => setTitle(e.target.value)} required/>
                 <textarea className='blogform8' placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                 <button type='submit' className='blogform9'>Post</button>
</form>
            </div>
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

export default BlogEdit