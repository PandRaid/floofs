import React from 'react';
import pups from '../images/pups.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import '../styles/About.css'
import * as emailjs from 'emailjs-com'
import { Button, FormFeedback, Form, FormControl, FormGroup, Label, Input } from 'react-bootstrap'


class Contact extends React.PureComponent {
	constructor(props) {
	super(props);
	this.state = {
	  from_name: '',
	  reply_to: '',
	  message: '',
	  error: '',
	  thankyou: false
	};
	this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur   = this.handleBlur.bind(this);
	}


  isValidEmail(email) {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  }

  validateField(field, value) {
    if(value.length<=0) {
      return <div className="alert alert-danger"><span className="text-capitalize">{field}</span> is required field.</div>;
    } 
    else {
      if(field=='email')       {
        if(!this.isValidEmail(value))
        return <div className="alert alert-danger">Invalid Email.</div>;
      }
      else {
        return '';
      }
    }
  }

  handleBlur(event) {
      this.setState({ error: this.validateField(event.target.name, event.target.value) });
  }
  
  handleChange(event) {
    this.setState({ 
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(e) {
  e.preventDefault();
  console.log("blah " + e.target.value);

  emailjs.sendForm('service_uz6xs1s', 'template_1wxmqsj', e.target, 'user_uFdvrWxBw3kcJW1Ax2U3U')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
}

  render() {
    return (
      <Container fluid>
      <Row className="spacing"></Row>
      <Row className="">
      	<Col></Col>
	    <Col xs={6} md={10} className="shadow box__color">
	    	<Col xs={1} md={1}></Col>
	    	<Col xs={4} md={4} className="contact__text pad__top">
	    	Contact Information
	    	<br/><hr/>
	    	Tel: 480-696-6969
	    	<br/><br/>
	    	EMail: help@fluffyfamilyfrenchies.com
	    	<br/>
	    	</Col>
	    	<Col xs={1} md={1}></Col>
	    	<Col xs={4} md={4} className="pad__top about__text"> 
	    		Contact Us	 
	    		<br/>

			    <form onSubmit={this.handleSubmit} encType="multipart/form-data" autoComplete="off">
			      <div className="form-group">
			        <input name="from_name" type="text" className="form-control" placeholder="Name" value={this.state.from_name} onChange={this.handleChange} onBlur={this.handleBlur} required="required" />
			      </div>
			          <div className="form-group">
			        <input name="reply_to" type="email" className="form-control" placeholder="Email" value={this.state.reply_to} onChange={this.handleChange} onBlur={this.handleBlur} required="required" />
			      </div>
			        <div className="form-group">
			        <textarea name="message" type="textarea" rows={6} className="form-control" placeholder="Message" value={this.state.message} onChange={this.handleChange} onBlur={this.handleBlur} required="required" />
			      </div>
			        <p className="text-center mb-0"><input type="submit" className="btn btn-primary w-100" value="Submit Now" /></p>
			    </form>
			</Col>
	    </Col>
	    <Col></Col>
	  </Row>
	</Container>
    );
  }
}

export default Contact;
