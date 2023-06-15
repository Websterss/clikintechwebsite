import React from 'react'
import Welcome from './Welcome/Welcome'
import Welcome2 from './Welcome/Welcome2'
import Blog from './Blogs/Blog'
import Contact_us from './Contact/Contact_us'
import Our_Services from './Services/Our_Services'

function Home() {
  return (
    <div>
        <Welcome />
        <Welcome2 />
        <Our_Services />
        <Blog/>
        <Contact_us />
       
    </div>
  )
}

export default Home