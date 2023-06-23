import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import './CareerForm.css'

function CareerForm() {
  return (
    <div class="career-form">
    <h1 className='form-heading'>Apply now</h1>
    <Form className='form_container'>
      <Row className='form_row'>
        <Col className="form-forms">
          <Form.Control  placeholder="Enter First name*" style={{ backgroundColor: '#F1EDED'}} />
        </Col>
        <Col className="form-forms">
          <Form.Control  placeholder="Enter Last name*" style={{ backgroundColor: '#F1EDED'}}/>
        </Col>
      </Row>
     <br />
      <Row>
        <Col className="form-forms">
          <Form.Control placeholder="Enter email address*" style={{ backgroundColor: '#F1EDED'}} />
        </Col>
        <Col className="form-forms">
          <Form.Control placeholder="Enter Phone no.*" style={{ backgroundColor: '#F1EDED'}}/>
        </Col>
      </Row>
      <br />
      <Row className='form_forms2'>
        <Col>
        <Form.Group as={Col} className='form_gender'>
        <Form.Select defaultValue="Gender*"style={{ backgroundColor: '#F1EDED'}} >
            <option>Gender*</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
        </Form.Select>
        </Form.Group>
        </Col>
        <Col>

        <Form.Group as={Col} className='form_gender'>
        <Form.Select defaultValue="Country*"style={{ backgroundColor: '#F1EDED'}}>
        <option>Country*</option>
            <option>India</option>
            <option>.....</option>
        </Form.Select>
        </Form.Group>
        </Col>
      </Row>
      <br />
      <Row>
        <Col className="form-forms">
          <Form.Control as="textarea" placeholder="Message" rows={6} style={{ backgroundColor: '#F1EDED'}} />
        </Col>
        <Col className="form-forms">
          <Form.Control placeholder="Upload Your CV here*" style={{ backgroundColor: '#F1EDED'}} />
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