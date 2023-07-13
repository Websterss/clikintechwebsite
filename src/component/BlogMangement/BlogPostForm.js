import React, {useState} from 'react';
import "./BlogPostForm.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';



function BlogPostForm() {

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription]  = useState("");

    const handleIamge = (e) => {
      const file = e.target.files[0];
      setFileToBase(file);
      console.log(file);
     }
  
     const setFileToBase = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
          setImage(reader.result);
      }
     };

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
        const post  = await axios.post(`http://localhost:5000/api/post`, {
          title: title, image: image, description: description, postId: localStorage.getItem("keyid")
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
                 <div className='blogform5'>
                 <lablel className="blogform6">Upload Image: </lablel>
                 <input type="file" className='blogform7' id="file" onChange={handleIamge} required/>
                 </div>
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

export default BlogPostForm