import React from "react"
import './Career.css'
import { Row, Container, Col } from "react-bootstrap"
import CareerPage from "./CareerPage"
import CareerForm from "./CareerForm"
import Image from '../../res/Picture2.png'
import Image1 from '../../res/Picture3.png'



function Career(){
    return(
        <div>
        <div className="career-container">
            <div className="container-lg">
                <Container>
                    <Row>
                        <Col md={8}>
                          <h4 className="head-lg">Join our Team</h4>
                          <h3 className="heading-lg">Work with Clikin Tech</h3>
                          <div className="search-bar-lg">
                          <input type="text" className="form-control rounded-0" placeholder="Search Career" />
                          <button className="btn btn-primary rounded-0"><span>Search</span></button>
                          </div>
                        
                          <div className="career-career-btn">
                           <button className="career-btn"  type="button" aria-expanded="false">
                               Get Started
                           </button>
                           </div>

                        </Col>

                        <Col md={4}>
                            <img src={Image1} className='img_1'  alt="img" />
                        </Col>
                    </Row>
                </Container>

            </div>
           
        </div>
             <div className="page_container">
                  <CareerPage/>
               </div>

               <div>
                <CareerForm/>
               </div>

               <div>
                <img src={Image} className="career_img" alt="img" ></img>
               </div>

              
        </div>     
        
        
    )
}


export default Career