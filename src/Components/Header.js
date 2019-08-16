import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';


const Header = () => {
    return (
    <header className="pb-4">
    <Container>
        <Row>
            <Col md={12}>
                <h1 className="text-center">
                    <a href="/react-product-page/">
                    <span>ARELY'S</span> 
                    Stationary Box
                    </a>
                    
                </h1>
            </Col>
        </Row>
    </Container>
    </header>
    );
}

export default Header;