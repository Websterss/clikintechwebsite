import React, {useState} from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";


const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};


function BlogEdit() {


    const [title, setTitle] = useState("");

    const [description, setDescription]  = useState("");

    let [loading, setLoading] = useState(false);



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
      setLoading(true);
      try {
        const post  = await axios.patch(`https://clikintechwebsite.onrender.com/api/update/${id}`, {
          title: title, description: description
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
    <div  className="sweet-loading">
        <div className='blogform1'>
            <div className='blogform2'>
<form className='blogform3' onSubmit={Blog}>
<h4 className='blogform10'>Blog Post</h4>
                 <input type="text" className='blogform4' placeholder='Enter Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                 <textarea className='blogform8' placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                 <button type='submit' className='blogform9'>{loading ? (<BeatLoader color="#FFFFFF" 
 loading={loading}
        cssOverride={override}
        size={15} />) : ( 'Update Blog')}</button>
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