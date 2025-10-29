import { Card, Placeholder, Container, Row, Col } from "react-bootstrap"

function EducationCard(props : any) {
    return(
        <div style={{paddingTop:"1%", paddingLeft:"32.5%", paddingRight:"32.5%", paddingBottom:".5%"}}>
        <Card style={{boxShadow:'0 0 10px 5px rgba(146, 146, 146, 0.5)' }}>
            <Card.Body>
            <Card.Title>
                Education
            </Card.Title>
            <Card.Text style={{fontSize:"20px"}}>
                
                <Row>
                    <Col>
                    {props.title} 
                    
                    </Col>
                    
                    <Col align="right">
                    {props.timeframe}
                    </Col>
                </Row>
                <Row>
                    <Col>{props.title2}</Col>
                    <Col align="right">
                    Oklahoma State University
                    </Col>
                </Row>
                <Row>
                   <Col>Graduated Cum Laude</Col> 
                   <Col align ="right">GPA: 3.7</Col>
                </Row>
                
            </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );    
}

export default EducationCard;
