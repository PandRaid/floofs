import React from 'react';
import '../styles/Available.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Available extends React.PureComponent {
  
  replace(ext) {
  	var text = "test";
  	if (ext == "avail"){
  		text = "moo";
  	}
  	return (
  		<p> {text} </p>
  		);
  }

  render() {
    return (
      <Container fluid>
      <Row className="spacing"></Row>
      <Row className="available__box__pad">
      	<Col></Col>
	    <Col xs={6} md={10} className="available__box box__color">
	    	  <h1 className="mt-2 available__text"> Available Puppies </h1>
	    	  <hr/>
	    	  {this.replace("avail")}
				    	  
	    </Col>
	    <Col></Col>
	  </Row>
	  <Row className="available__box__pad">
      	<Col></Col>
	    <Col xs={6} md={10} className="available__box box__color">
	    	  <h1 className="mt-2 available__text"> Expected </h1>
	    	  <hr/>
	    	  <p> Text </p> 
	    </Col>
	    <Col></Col>
	  </Row>
	  <Row className="available__box__pad">
      	<Col></Col>
	    <Col xs={6} md={10} className="available__box box__color">
	    	  <h1 className="mt-2 available__text"> Past Puppies </h1>
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
