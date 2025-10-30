import { Card, Row, Col, Container } from "react-bootstrap";
import { useState } from "react";

function Title() {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    return (
        <div>
        <h1 className="Name" style={{fontSize: 72, marginTop:"2.5%"}}>I'm Jake Williams </h1>
        <h2 className ="Name" style={{fontSize: 40, marginTop:"1%"}}>
            <Container>
            <Row>
                <Col>
                <Card  className={`glowing-component ${isHovered ? 'glowing' : ''}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
            <a style={{color:"rgba(249, 252, 255, .90)"}}href="#Software">
                Software Engineer
            </a> 
            </Card>
            </Col>
            <Col>
            <Card className={`glowing-component ${isHovered1 ? 'glowing' : ''}`}
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}>
            <a href="#Research" style={{color:"rgba(249, 252, 255, .90)"}}>
                Technical Researcher
            </a>
            </Card> 
            </Col>
            <Col>
            <Card className={`glowing-component ${isHovered2 ? 'glowing' : ''}`}
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}>
            <a href="#Community" style={{color:"rgba(249, 252, 255, .90)"}}>
                Community Builder
            </a>
            </Card>
            </Col> 
            </Row>
            </Container>
        </h2>
        </div>
    );
}

export default Title;
