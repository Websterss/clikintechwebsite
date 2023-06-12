import React from 'react'
import Welcome from '../Welcome'
import Welcome2 from '../Welcome2'
import Footer from '../Footer'
import Contact_us from '../../component2/Contact_us'
import Our_Services from '../Our_Services/Our_Services'

function Home() {
  return (
    <div>
         <Welcome />
        <Welcome2 /> 
        <Our_Services />
        <Contact_us />
     <Footer />
    </div>
  )
}

export default Home