import { Card, Container, Row, Col } from "react-bootstrap"

function ResumeCard(props: any) {
    return(
        <div style={{paddingTop:"1%", paddingLeft:"5%", paddingRight:"5%", paddingBottom:".5%", whiteSpace: "pre-wrap"}}>
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
                {props.description}
                {props.links && props.links.length > 0 && 
                    props.links.map((link: any, index: number) => (
                        <div key={index}>
                            {'• '}
                            <a href={link.linkURL} target="_blank" rel="noopener noreferrer">
                                {link.linkTitle}
                            </a>
                        </div>
                    ))
                }
            </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );    
}

export default ResumeCard;
