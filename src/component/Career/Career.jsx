import React from "react"
import './Career.css'
import { Row, Container, Col } from "react-bootstrap"
import CareerPage from "./CareerPage"
import CareerForm from "./CareerForm"
import Image from '../../res/CareerImages/Picture2.png'
import Image1 from '../../res/CareerImages/Picture3.png'
import { useHistory } from "react-router-dom";



function Career(){

    const history = useHistory();

    const navigate = () => {
        history.push("/ContactUs")
    }
    return(
    <div>
        {/*Large Screens*/}
        <div className="career-container">
            <div className="d-none d-lg-block container-lg">
                <Container>
                    <Row>
                        <Col md={8}>
                          <h4 className="head-lg">Join our Team</h4>
                          <h3 className="heading-lg">Work with Clikin Tech</h3>
                         
                          <div className="career-career-btn">
                           <button className="career-btn"  type="button" aria-expanded="false" onClick={navigate}>
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
           

            {/* Small Screens */}
            <div className="d-lg-none container-sm">
                <div className="img-front"></div>
                <div className="container bb">
                    <div className="row r">
                        <div className="col c">
                            <img src={Image1} alt="img" className="img-now" ></img>

                        </div>

                    </div>

                    <div className="row r">
                        <div className="col text-center">
                        <h3 className="heading-sm"><span>Join our Team</span><br></br>Work with Clikin Tech</h3>
                        <div className="search-bar-sm">
                          <input type="text" className="form-control rounded-0" placeholder="Search Career" />
                          <button className="btn btn-success rounded-0"><span>Search</span></button>
                          </div>
                        
                          <div className="career-career-btn">
                           <button className="career-btn-sm"  type="button" aria-expanded="false">
                               Get Started
                           </button>
                           </div>
                        

                        </div>
                    </div>

                </div>
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