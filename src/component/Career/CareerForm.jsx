import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

function CareerForm() {
  return (
    <div>

    <h1 className='form-heading'>Apply now</h1>
    <Form className='form_container'>
      <Row className='form_row'>
        <Col>
          <Form.Control placeholder="Enter First name*" />
        </Col>
        <Col>
          <Form.Control placeholder="Enter Last name*" />
        </Col>
      </Row>
     <br />
      <Row>
        <Col>
          <Form.Control placeholder="Enter email address*" />
        </Col>
        <Col>
          <Form.Control placeholder="Enter Phone no.*" />
        </Col>
      </Row>
      <br />
      <Row className='form_forms2'>
        <Col>
        <Form.Group as={Col} className='form_gender'>
        <Form.Select defaultValue="Gender*">
            <option>Gender*</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
        </Form.Select>
        </Form.Group>
        </Col>
        <Col>

        <Form.Group as={Col} className='form_gender'>
        <Form.Select defaultValue="Country*">
        <option>Country*</option>
            <option>India</option>
            <option>.....</option>
        </Form.Select>
        </Form.Group>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Form.Control as="textarea" placeholder="Message" rows={6} />
        </Col>
        <Col>
          <Form.Control placeholder="Upload Your CV here*" />
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