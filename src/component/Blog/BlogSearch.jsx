import React from 'react';
import './BlogSearch.css';
import { Container, Row, Col } from 'react-bootstrap';
import image from '../../res/blogimages/ourblog.png';

function BlogSearch() {
  return (
    <div className="app-container">
      {/* Large Screens */}
      <div className="d-none d-lg-block container-lg">
        <Container>
          <Row>
            <Col md={8}>
              <h1 className="heading-lg">Read Top Articles</h1>
              <div className="search-bar-lg">
                <input type="text" className="form-control rounded-0" placeholder="Search Articles" />
                <button className="btn btn-success rounded-0"><span>Search</span></button>
              </div>
            </Col>
            <Col md={4}>
              <img src={image} alt="Image" className="imgg-fluid" />
            </Col>
          </Row>
        </Container>
      </div>

{/* Small Screens */}
<div className="d-lg-none container-sm">
  <div className='img-back'></div>
  <div className="container bb">
    <div className="row r">
      <div className="col c">
        <img src={image} alt="Image" className="present-image" />
      </div>
    </div>
    <div className="row r">
      <div className="col text-center">
        <h1 className="heading-sm">Read Top Articles</h1>
        <div className="search-bar-sm">
          <input type="text" className="form-control rounded-0" placeholder="Search Articles" />
          <button className="btn btn-success rounded-0"><span>Search</span></button>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default BlogSearch;
