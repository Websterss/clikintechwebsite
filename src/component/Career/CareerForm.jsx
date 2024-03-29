import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import './CareerForm.css'
import React, { useState, useRef } from 'react';
import { Formik} from "formik";
import * as yup from "yup";
import emailjs from '@emailjs/browser';
import { Padding } from '@mui/icons-material';

function CareerForm() {

  const [formObject, setFormObject] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validation = yup.object().shape({
    name: yup.string().min(2).max(15).required("Please enter your name"),
    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter a valid email"),
    phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
    message: yup
      .string()
      .min(10)
      .max(200),
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7um1nss', 'template_tnseqft', form.current, 'DhM3EP4ecpg8d5zrt')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};

  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

	const handleSubmission = () => {
	};

  return (
    <div class="career-form">
    <h1 className='form-heading'>Apply now</h1>
    <hr className='line-career'></hr>

    <div>
    <Formik
        initialValues={formObject}
        validationSchema={validation}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={(values, actions) => {
          // Handle form submission
        }}
      >

     <Form className='form_container' ref={form} onSubmit={sendEmail}>
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
        <div>
			<input className="form_form1" type="file" name="file" onChange={changeHandler} style={{ backgroundColor: '#F1EDED'}} />
			
		</div>
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

    </Formik> 
    </div>
    
     </div>
  )
}

export default CareerForm