import React from 'react';
import {A, usePath} from 'hookrouter';
import {Navbar, Nav} from 'react-bootstrap';


const Navigation = () => {
    const path = usePath();

    return (
    <Navbar collapseOnSelect expand="md" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="ml-auto" >
                    <Nav.Item >
                    <A href="/react-product-page/" className={path === "/react-product-page/" ? 'active' : 'normal'} >Home</A>
                    </Nav.Item>
                    <Nav.Item >
                    <A href="/react-product-page/products" className={path === "/react-product-page/products" ? 'active' : 'normal'}>Products</A>
                    </Nav.Item>
                    <Nav.Item >
                    <A href="/react-product-page/contact" className={path === "/react-product-page/contact" ? 'active' : 'normal'}>Contact</A>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
    </Navbar>
    
    );
}

export default Navigation;