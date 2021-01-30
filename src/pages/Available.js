import React from 'react';
import '../styles/Available.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ReactHtmlParser from 'react-html-parser'; 


  function parseFetch() {
  	var list = arguments[0];


  	var html = '<div class="info__text">';
  	if (list.length === 0){
  		html += 'No pups at this time';
  	}
	else {
  		var count = 0;

  		list.forEach(function(entry) {
  			if (!(count % 2)){
  				html += '<div class="row"><div class="col-md-2 col-2"></div>';
  			}

  			html += '<div class="col-md-4 col-4">';
  			html += '<img class="wide" src="http://localhost:5000/static/' + entry.name + '/' + entry.name + '-1.jpg">';
  			html += '</br></br><hr>';
		    html += 'Name: ' + entry.name + '</br>';
		    html += 'Birthday: ' + entry.birthdate + '</br>';
		    html += 'Color: ' + entry.color + '</br>';
		    html += entry.description + '</br>';
		    html += '</div>';

		    if (count % 2){
		    	html += '</div>';
		    }
		    count++;
		});
  	}


	html = html + '</div> </br>'
	return html;
  }

class Available extends React.PureComponent {

  // Retrieves the list of items from the Express app
  constructor(props){
    super(props);
    this.state = {
      avail: [],
      exp: [],
      past: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getAvail();
  }

  // Retrieves the list of items from the Express app
  getAvail = () => {
    fetch('/avail')
    .then(res => res.json())
    .then(data => this.setState({ avail : data.available, exp : data.expected, past : data.past }))
  }

  render() {
  	const {avail} = this.state;
  	const {exp} = this.state;
  	const {past} = this.state;
  	console.log("B1 " + avail);
  	console.log("B2 " + exp);
  	console.log("B3 " + past);



    return (
      <Container fluid>
      <Row className="spacing"></Row>
      <Row className="available__box__pad">
      	<Col></Col>
	    <Col xs={6} md={10} className="available__box box__color">
	    	  <h1 className="mt-2 available__text"> Available </h1>
	    	  <hr className="break_pad"/>
	    	  		{ReactHtmlParser (parseFetch(avail))}
	      
				    	  
	    </Col>
	    <Col></Col>
	  </Row>
	  <Row className="available__box__pad">
      	<Col></Col>
	    <Col xs={6} md={10} className="available__box box__color">
	    	  <h1 className="mt-2 available__text"> Expected </h1>
	    	  <hr className="break_pad"/>
	    	  {ReactHtmlParser (parseFetch(exp))} 
	    </Col>
	    <Col></Col>
	  </Row>
	  <Row className="available__box__pad">
      	<Col></Col>
	    <Col xs={6} md={10} className="available__box box__color">
	    	  <h1 className="mt-2 available__text"> Past Pups </h1>
	    	  <hr className="break_pad"/>
	    	  {ReactHtmlParser (parseFetch(past))}
	    </Col>
	    <Col></Col>
	  </Row>
	</Container>
    );
  }
}

export default Available;
