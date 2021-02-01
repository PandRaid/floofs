import React from 'react';
import '../styles/Available.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ReactHtmlParser from 'react-html-parser'; 
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


  function parseFetch() {
  	var item = arguments[0];
  	var index = arguments[1];
  	var box = (index )
  	var img_src = '"http://localhost:5000/static/' + item.name + '/' + item.name + '-1.jpg"';

  	var body = document.getElementsByTagName(index + 'box')[0],
    newdiv = document.createElement('div');   //create a div
    newdiv.id = 'newid';                      //add an id
    body.appendChild(newdiv);                 //append to the doc.body
    body.insertBefore(newdiv,body.firstChild) //OR insert it

  }
  function newRow() {
 
  }

  function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

class Available extends React.PureComponent {

  // Retrieves the list of items from the Express app
  constructor(props){
    super(props);
    this.state = {
      avail: [],
      exp: [],
      past: [],
      modalShow: false
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
  	const {modalShow} = this.state;


    return (
      <Container fluid>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => this.setState({modalShow : false})}
      />
      <Row className="spacing"></Row>
      <Row className="available__box__pad">
      	<Col></Col>
	    <Col xs={6} md={10} className="available__box box__color">
	    	  <h1 className="mt-2 available__text"> Available </h1>
	    	  <hr className="break_pad"/>

			  <div className="info_text">

		    	  	{   (avail.length > 0) &&
	    	  			avail.map((item, index) => {

			    	  		return (
			    	  			<>
			    	  			{(index % 2) ?
			    	  				<Row>
			    	  				<Col xs={2} md={2}></Col>
			    	  				<Col id={index + 'box'} xs={4} md={4}></Col>
			    	  				<Col id={(index + 1) + 'box'} xs={4} md={4}></Col>
			    	  				</Row>
			    	  				:
			    	  				""
			    	  			}
			    	  			</>
			    	  		);
			    	  		{parseFetch(item, index)}
		    	  		})
		    	  	}
		    	</div>
	      
				    	  
	    </Col>
	    <Col></Col>
	  </Row>
	  <Row className="available__box__pad">
      	<Col></Col>
	    <Col xs={6} md={10} className="available__box box__color">
	    	  <h1 className="mt-2 available__text"> Expected </h1>
	    	  <hr className="break_pad"/>
	    </Col>
	    <Col></Col>
	  </Row>
	  <Row className="available__box__pad">
      	<Col></Col>
	    <Col xs={6} md={10} className="available__box box__color">
	    	  <h1 className="mt-2 available__text"> Past Pups </h1>
	    	  <hr className="break_pad"/>
	    </Col>
	    <Col></Col>
	  </Row>
	</Container>
    );
  }
}

export default Available;
