import React from 'react'
import Welcome from '../Welcome'
import Welcome2 from '../Welcome2'
import Footer from '../Footer'
import Blog from '../Blog'
import Contact_us from '../../component2/Contact_us'

function Home() {
  return (
    <div>
        <Welcome />
        <Welcome2 />
        <Blog/>
        <Contact_us />
        <Footer />
    </div>
  )
}

export default Home