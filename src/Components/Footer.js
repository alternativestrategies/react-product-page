import React from 'react';
import {Container, Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap';

const Footer = () => {
    let lastMod = document.lastModified;

    return(
        <footer className="footer text-center pb-4 pt-4">
            <Container fluid={true}>
                <Row>
                    <Col xs={10} sm={6} lg={4} className="mx-auto">
                    <p className="footer-lead">
                        Sign up for our Newsletter
                    </p>
                    <p>
                        Don't miss out on the latest news from our team!
                    </p>
                    <InputGroup className="pb-4">
                        <FormControl 
                        type="email"
                        placeholder="EMAIL ADDRESS" />
                        <InputGroup.Append >
                            <Button className="submit-btn">
                                Sign Up
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                    </Col>
                </Row>
                <span>Copyright 2019, Alternative Strategies</span>
                <span>{`Last Modified: ${lastMod}`} </span>
            </Container>
        </footer>
    );
}

export default Footer;