import { Card, Container, Row, Col } from "react-bootstrap"

function ResumeCard(props: any) {
    return(
        <div style={{paddingTop:"1%", paddingLeft:"30%", paddingRight:"30%", paddingBottom:".5%"}}>
        <Card style={{boxShadow:'0 0 10px 5px rgba(117, 117, 117, 0.25)' }}>
            <Card.Body>
            <Card.Title>
                <Container fluid>
                <Row>
                    <Col>
                    {props.title}
                    </Col>
                    <Col align="right">
                    {props.timeframe}
                    </Col>
                </Row>
                <Row>
                    <Col style = {{fontStyle:"italic"}}>{props.company}</Col>
                </Row>
                </Container>
            </Card.Title>
            <Card.Text>
                <Container><Col>{props.description}</Col></Container>
            </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );    
}

export default ResumeCard;
