import React from 'react';
import '../styles/Available.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ReactHtmlParser from 'react-html-parser'; 
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

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


    return (
      <Container fluid>
      {console.log("state " + this.state.modalShow)}
      <MyVerticallyCenteredModal
        show={this.state.modalShow}
        onHide={() => this.setState({modalShow : false})}
      />
      <Row className="spacing" id="moo"></Row>
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
			    	  			{!(index % 2) ?
			    	  				<Row>
			    	  				<Col xs={2} md={2}></Col>
			    	  				<Col xs={4} md={4}>
			    	  					<div className="info__text">
			    	  					<img className="wide" src={'http://localhost:5000/static/' + item.name + '/' + item.name + '-1.jpg'} onClick={() => this.setState({modalShow : true})}/>
			    	  					<br/><br/><hr className="break_pad"/> 
								  		Name : {item.name} <br/>
								  		Birthday : {item.birthdate} <br/>
								  		Color : {item.color} <br/>
								  		{item.description} <br/>
								  		<br/>
								  		</div>
			    	  				</Col>
			    	  				<Col xs={4} md={4}>
			    	  					{(index < avail.length) ?
			    	  						<div className="info__text">
				    	  					<img className="wide" src={'http://localhost:5000/static/' + avail[index+1].name + '/' + avail[index+1].name + '-1.jpg'} onClick={() => this.setState({modalShow : true})}/>
				    	  					<br/><br/><hr className="break_pad"/> 
									  		Name : {avail[index+1].name} <br/>
									  		Birthday : {avail[index+1].birthdate} <br/>
									  		Color : {avail[index+1].color} <br/>
									  		{avail[index+1].description} <br/>
									  		<br/>
									  		</div>
			    	  					:""}
			    	  				</Col>
			    	  				</Row>

			    	  				:
			    	  				""
			    	  			}
			    	  			</>
			    	  		);
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
