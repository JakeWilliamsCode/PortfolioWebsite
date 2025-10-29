import React from "react";
import { useRef } from "react";
import { Card, Placeholder, Overlay } from "react-bootstrap";
import { DiamondFill } from "react-bootstrap-icons";

function AboutCard() {
    const target = useRef(null);
    return (
        <div ref={target} style={{paddingTop:"5%", paddingLeft:"32.5%", paddingRight:"32.5%", paddingBottom:"1%"}}>
        <Card style={{boxShadow:'0 0 10px 5px rgba(146, 146, 146, 0.5)'}}>
        <Card.Body>
          <Card.Title >
            About Me
          </Card.Title>
          <Card.Text style={{fontSize:"20px"}}>
            I'm a recent Oklahoma State University Graduate in Computer Science and Mathematics. 
            I'm passionate about multiple fields in technology and have worked in fields 
            ranging from Machine Learning, Fullstack Web Development, to even Virtual Reality!
            I enjoy working together as a team and have greatly enjoyed serving Oklahoma State University
            as the president of multiple student organizations. Outside of Tech and University, I enjoy
            reading, cooking, painting, powerlifting, and gaming. Currently, I am a Software Developer III working on Full Stack projects at Paycom! 
          </Card.Text>
        </Card.Body>
        </Card>
        </div>
    );
}

export default AboutCard;
