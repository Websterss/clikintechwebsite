import React, {useState,} from 'react';
import "./BlogPostForm.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import BeatLoader from "react-spinners/BeatLoader";



const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};




function BlogPostForm() {

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription]  = useState("");

    let [loading, setLoading] = useState(false);
   

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
        setLoading(true);
      try {
        const post  = await axios.post(`https://clikintechwebsite.onrender.com/api/post`, {
          title: title, image: image, description: description, postId: localStorage.getItem("keyid")
        })
        if(post.status === 200){
          setLoading(false);
          successnotify(post.data.message);
          setTimeout(() => {
            window.location.href = "/BlogMangement"
          },5000)
        
        }
      } catch (error) {
        errornotify("Network Error")
        console.log(error);
      }
     }

   

  return (
    <div className="sweet-loading">
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
                 <button type='submit' className='blogform9'>{loading ? (<BeatLoader color="#FFFFFF" 
 loading={loading}
        cssOverride={override}
        size={15} />) : ( 'Post')}</button>
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