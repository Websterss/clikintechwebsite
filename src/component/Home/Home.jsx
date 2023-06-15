import React from 'react'
import Welcome from './Welcome'
import Welcome2 from './Welcome2'
import Footer from './Footer'
import Blog from './Blog'
import Contact_us from './Contact_us'
import Our_Services from './Our_Services/Our_Services'

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