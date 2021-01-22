import React from 'react';
import '../styles/Available.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Available extends React.PureComponent {

  // Retrieves the list of items from the Express app
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/avail')
    .then(res => res.json())
    .then(data => this.setState({ list : data.available }))
  }

  render() {
  	const {list} = this.state;
  	if (list.length > 0){
  		console.log("test " + list[0].name);
  	}

    return (
      <Container fluid>
      <Row className="spacing"></Row>
      <Row className="available__box__pad">
      	<Col></Col>
	    <Col xs={6} md={10} className="available__box box__color">
	    	  <h1 className="mt-2 available__text"> Available </h1>
	    	  <hr/>
                  {
                  	list.map((item) => {
                  		return(
                  			<div>
                  				{item.name}
                  			</div>
                  		);
                  	})
                  }
	      
				    	  
	    </Col>
	    <Col></Col>
	  </Row>
	  <Row className="available__box__pad">
      	<Col></Col>
	    <Col xs={6} md={10} className="available__box box__color">
	    	  <h1 className="mt-2 available__text"> .. </h1>
	    	  <hr/>
	    	  <p> Text </p> 
	    </Col>
	    <Col></Col>
	  </Row>
	  <Row className="available__box__pad">
      	<Col></Col>
	    <Col xs={6} md={10} className="available__box box__color">
	    	  <h1 className="mt-2 available__text"> .. </h1>
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
