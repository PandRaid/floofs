import React from 'react';
import '../styles/Available.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ReactHtmlParser from 'react-html-parser'; 


  function getAvail() {
  	var list = arguments[0];

  	if (list.length > 0){
  		var html = '<div class="info__text"><div class="row"><div class="col-md-2 col-2"></div>';
  		var count = 0;
  		
  		list.forEach(function(entry) {
  			html += '<div class="col-md-4 col-4">';
  			html += '<img class="wide" src="http://localhost:5000/static/' + entry.name + '/' + entry.name + '-1.jpg">';
  			html += '</br></br><hr>';
		    html += 'Name: ' + entry.name + '</br>';
		    html += 'Birthday: ' + entry.birthdate + '</br>';
		    html += 'Color: ' + entry.color + '</br>';
		    html += entry.description + '</br>';
		    html += '</div>';
		});


  		html = html + '</div></div>'
  		return html;
  	}


  }

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

    return (
      <Container fluid>
      <Row className="spacing"></Row>
      <Row className="available__box__pad">
      	<Col></Col>
	    <Col xs={6} md={10} className="available__box box__color">
	    	  <h1 className="mt-2 available__text"> Available </h1>
	    	  <hr/>
	    	  		{ReactHtmlParser (getAvail(list))}
	      
				    	  
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
	    	  <h1 className="mt-2 available__text"> Past Pups </h1>
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
