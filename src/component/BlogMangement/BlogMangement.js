import React, {useState, useEffect} from 'react';
import "./BlogMangement.css";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'; 
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.min.css'
import BlogLogo from './BlogLogo';
import { ToastContainer, toast } from 'react-toastify';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function BlogMangement() {

  const [cardData, setCardData] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [isLoading, setISLodaing]  = useState(true);


  //get Blog
  useEffect(() => {
      axios
        .get("https://clikintechwebsite.onrender.com/api/get")
        .then(res => 
          {setCardData(res.data.blog)
            setISLodaing(false)
          })
        .catch(err => console.error(err));
  },[setCardData]);

  console.log(cardData);









   //[
  //     {
  //       title: 'The Ultimate Guide To SEO Success in 2023',
  //       text: 'Stay ahead of the competition with SEO strategies which will improve your website ranking and organic traffic.',
  //       image: image,
  //     },
  //     {
  //       title: 'Mastering Social Media Analytics: Measuring Success',
  //       text: 'Learn how to effectively measure and optimize your social media marketing strategies.',
  //       image: image,
  //     },
  //     {
  //       title: 'Unleashing The Potential Of Data-Driven marketing',
  //       text: 'Discover the strategies and tools to harness the power of data to limitness possibilities of data-driven marketing.',
  //       image: image,
  //     }
  //   ];

  return (
    <div>
        <SkeletonTheme highlightColor='#050921'>
       <BlogLogo />
        <div className='blogmangement2'>
           <div className='blogmangement3'>
              <div className='blogmangement4'>
                 <p className='blogmangementp1'>Amount of Blogs</p>
                 <p className='blogmangementp2'>{cardData.length}</p>
              </div>
              <div className='blogmangement4'>
                 <p className='blogmangementp1'>Amount Published</p>
                 <p className='blogmangementp2'>{cardData.length}</p>
              </div>
              <div className='blogmangement4'>
                 <p className='blogmangementp1'>Total Drafts</p>
                 <p className='blogmangementp2'>0</p>
              </div>
           </div>
           <div className='blogmangement5'>
              <div className='blogmangement6'>
                    <p className='blogmangementp3'>Quick action</p>
                    <button className='blogmangementbutton' onClick={() => window.location.href="/BlogPost"}>Create new blog</button>
              </div>
           </div>
        </div>
        <div className='blogmangement7'>
           <div className='blogmangement8'>
            <h4 className='blogmangementh41'>Blogs</h4>
            <hr className='blogmangementhr'></hr>
           </div>
        </div>
        <div className='blogmangement9'>
             <div className='blogmangement10'>
              <div className='blogmangement11'>
                <p className='blogmangementp4'>Published ({cardData.length})</p>
                <hr className='blogmangementpublishline'></hr>
              </div>
              <div className='blogmangement12'>Draft (0)</div>
             </div>
             <div className='blogmangement13'>
                <div className='blogmangement14'>
                    <FormatListBulletedIcon className='blogmangementicon1' sx={{ fontSize: 27 }} />
                </div>
                <div className='blogmangement15'>
                   <AppsIcon className='blogmangementicon2' sx={{ fontSize: 27 }} />
                </div>
                <div className='blogmangement16'>
                    <SearchIcon  className='blogmangementicon3' sx={{ fontSize: 21 }}/>
                    <input type="text" className='blogmangementinput' onChange={(e) => setSearchTitle(e.target.value)} placeholder='serach'/>
                </div>
             </div>
        </div>
      


  {
    isLoading ? (
      <div className='row'>

                <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center" >
                  <div className="sk-my-card">
                    <Skeleton  className="sk-my-card-image" alt="Card" />
                    <div className="sk-my-card-body">
                      <Skeleton  className="sk-my-card-title"></Skeleton>
                      <Skeleton  className="sk-my-card-text"></Skeleton>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center" >
                  <div className="sk-my-card">
                    <Skeleton  className="sk-my-card-image" alt="Card" />
                    <div className="sk-my-card-body">
                      <Skeleton  className="sk-my-card-title"></Skeleton>
                      <Skeleton  className="sk-my-card-text"></Skeleton>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center" >
                  <div className="sk-my-card">
                    <Skeleton  className="sk-my-card-image" alt="Card" />
                    <div className="sk-my-card-body">
                      <Skeleton  className="sk-my-card-title"></Skeleton>
                      <Skeleton  className="sk-my-card-text"></Skeleton>
                    </div>
                  </div>
                </div>
                  
    </div>
    ) : (
      <div className="row">
      {
        cardData.filter((card) => {
          if(searchTitle === ""){
            return card
          }else if(card.title.toLowerCase().includes(searchTitle.toLowerCase())){
               return card
          }
    }).map((card) => (
      <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center" key={card._id}>
        <div className="my-card">
          <img src={card.image} className="my-card-image" alt="Card" />
          <div className="my-card-body">
            <h5 className="my-card-title">{card.title}</h5>
            <p className="my-card-text">{card.description}</p>
            <div className='blogmangementflex'>
            <button  className='blogmangementcardbuttonedit' onClick={() => window.location.href=`/BlogEdit/${card._id}`}>Edit</button>
           <DeleteBlog key={card._id} id={card._id} />
            </div>
          </div>
        </div>
      </div>
       ))
      }
    </div>
    )
  }
  
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
</SkeletonTheme>
    </div>
  )
}

export default BlogMangement



function DeleteBlog(id){
  
  
  // success notify

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
  

  //Delete Blog


const del = async() => {
  try {
    const elete = await axios.delete(`https://clikintechwebsite.onrender.com/api/delete/${id.id}`)
console.log(elete)
if(elete.status === 200){
  successnotify(elete.data.message)
  setTimeout(() => {
    window.location.reload();
  },5000)
 
}
  
} catch (error) {
    console.log(error);
}
}
  return (
    <button className='blogmangementcardbuttondelete' onClick={del}>Delete</button>
  )
}