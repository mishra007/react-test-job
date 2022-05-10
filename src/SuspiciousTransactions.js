import React, { useState } from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap';
import { stockData } from './data_json'

const SuspiciousTransactions = () => {

	const [suspiciousData, setSuspiciousData] = useState(stockData);
	
	function action(type, id){
		setSuspiciousData(suspiciousData.filter(item => item.id !== id));
	}

	return (
		<Container style={{ width: '50rem', marginTop: '4rem' }}>
	        <Row>

	            <h2>Suspicious Transactions</h2>

	            {suspiciousData.length>0  && suspiciousData.map(function (data, index) {
		        return(
		            <Card className="mb-2" key={index}>
		              <Card.Body>
		                <Card.Title>Transaction ID: {data.id}</Card.Title>
		                <Card.Subtitle className="mb-2 text-muted">From User: {data.from_user}</Card.Subtitle>
		                <Card.Subtitle className="mb-2 text-muted">To User: {data.to_user}</Card.Subtitle>
		                <Card.Text>${data.amount}</Card.Text>
		                <Button variant="danger" onClick={()=>action('block', data.id)}>Block</Button>{' '}
		                <Button variant="info" onClick={()=>action('allow', data.id)}>Allow</Button>
		              </Card.Body>
		            </Card>
		            )
                })}


	        </Row>
	    </Container>
	)
}

export default SuspiciousTransactions;

