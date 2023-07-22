import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import './CareerForm.css'
import React, { useState } from 'react';

function CareerForm() {

  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  return (
    <div class="career-form">
    <h1 className='form-heading'>Apply now</h1>
    <hr className='line-career'></hr>
    <Form className='form_container'>
      <Row>
        <Col>
          <Form.Control  className="form_form" placeholder="Enter First name*" style={{ backgroundColor: '#F1EDED'}} />
        </Col>
        <Col>
          <Form.Control  className="form_form2"  placeholder="Enter Last name*" style={{ backgroundColor: '#F1EDED'}}/>
        </Col>
      </Row>
     <br />
      <Row>
        <Col>
          <Form.Control  className="form_form" placeholder="Enter email address*" style={{ backgroundColor: '#F1EDED'}} />
        </Col>
        <Col>
          <Form.Control  className="form_form2" placeholder="Enter Phone no.*" style={{ backgroundColor: '#F1EDED'}}/>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
        <Form.Group as={Col} className='form_form_gender'>
        <Form.Select defaultValue="Gender*"style={{ backgroundColor: '#F1EDED'}} >
            <option>Gender*</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
        </Form.Select>
        </Form.Group>
        </Col>
        <Col>
        <Form.Group as={Col} className="form_form_gender">
              <Form.Select
                value={selectedCountry}
                onChange={handleCountryChange}
                style={{ backgroundColor: '#F1EDED' }}
              >
                <option>Country*</option>
                <option>India</option>
                <option>Others</option>
              </Form.Select>
            </Form.Group>
          </Col>
          {selectedCountry === 'Others' && (
            <Col>
              <Form.Control
                className="form_form_other"
                placeholder="Enter Other Country*"
                style={{ backgroundColor: '#F1EDED' }}
              />
            </Col>
          )}
      </Row>
      <br />
      <Row>
        <Col>
          <Form.Control className="form_form" as="textarea" placeholder="Message" rows={6} style={{ backgroundColor: '#F1EDED'}} />
        </Col>
        <Col>
          <Form.Control className="form_form2" placeholder="Upload Your CV here*" style={{ backgroundColor: '#F1EDED'}} />
        </Col>
      </Row>
      <Row>
        <Col>
        <div className="form-form-btn">
           <button className="form-btn"  type="button" aria-expanded="false">
             Submit
            </button>
           </div>
           
        </Col>
      </Row>
     </Form>
     </div>
  )
}

export default CareerForm