import React from 'react';
import  blogmangement  from "../../res/BlogMangementImages/blogmangement.png";

function BlogLogo() {
  return (
    <div>
    <div className='blogmangement'>
    <div className='container blogmangement1'>
         <div>
            <h4 className='blogmangementh4'>Blog Management</h4>
            {/* <p className='blogmangementp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p> */}
         </div>
         <div>
             <img className='blogmangementimage' src={blogmangement} alt="" />
         </div>
    </div>
</div>
</div>
  )
}

export default BlogLogo