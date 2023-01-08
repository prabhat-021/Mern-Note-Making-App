// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/userAction.js';
import {useNavigate} from "react-router-dom";

export default function Header() {

    const dispatch = useDispatch();

    // const userLogin = useSelector(state => state.userLogin);
    // const { userInfo } = userLogin;
    const navigate = useNavigate();

    function logoutHandler() {
        dispatch(logout());
        navigate("/")
    }

    return (
        <Navbar bg="primary" expand="lg" varient="dark">
            <Container>
                <Navbar.Brand href="/">Note Making App</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form inline="true">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link to="/mynotes"> My Notes</Nav.Link>
                        <NavDropdown title="Prabhat Sehrawat" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="">My Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={logoutHandler}>
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

