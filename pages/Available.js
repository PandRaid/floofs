import React from 'react';
import '../styles/Available.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Available extends React.PureComponent {
  render() {
    return (
      <Container fluid>
      <Row className="spacing"></Row>
      <Row className="">
      	<Col></Col>
	    <Col xs={6} md={10} className="shadow box__color available__text">
	    	  <h1> Available Puppies </h1>
	    	  <hr/>
	    	  <p> Text </p> 
	    </Col>
	    <Col></Col>
	  </Row>
	</Container>
    );
  }
}

export default Available;
