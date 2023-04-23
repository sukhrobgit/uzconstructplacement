import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LoginModal from './modals/LoginModal';
import SignUpModal from './modals/SignUpModal';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function NavbarGen() {
  const userSignIn = useSelector((state)=>state.userSignIn)
  const {userInfo}=  userSignIn
  console.log(userInfo, "hello");
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="home">UzConstruct</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about-us">AboutUs</Nav.Link>
            <Nav.Link href='portfolio' >Portfolio</Nav.Link>
            <Nav.Link href='contact-us'>Contact Us</Nav.Link>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#login">Login</Nav.Link> */}


      {
        userInfo?.isAdmin ? <Nav.Link href='admin' className='userName'> Admin panel: {userInfo.firstName}</Nav.Link>:
        userInfo? <NavLink to="/user-account" className={"userName"}>My Account: {userInfo.firstName}</NavLink>:

        <div className='auth-btns'>
        <LoginModal/>
        <SignUpModal/>
      </div>

      }
            

          

            {/* <Nav.Link href="#signup">SignUp</Nav.Link> */}
           
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarGen;
