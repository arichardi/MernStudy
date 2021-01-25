import React from 'react';
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

function AppNavBar () {

    //Save the toogle open state
    const [collapsed, setCollapsed] = React.useState(true);

    //Invert the result of collapsed not metter the result
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar color='dark' dark expand='sm' className='mb-5' >
                <Container>
                    <NavbarBrand href='/' >Shopping List</NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar} />
                    <Collapse isOpen={collapsed} navbar />
                    <Nav className='ml-auto' navbar >
                        <NavItem>
                            <NavLink href='http://github.com/arichardi ' >Github</NavLink>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default AppNavBar