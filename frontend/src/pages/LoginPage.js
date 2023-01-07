import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MainScreen from "../components/MainScreen.js";
import { Link } from "react-router-dom";
import "../components/MainScreen.css";
import { useState } from 'react';
import axios from "axios";
import Loading from "../components/Loading.js";
import ErrorMessage from "../components/ErrorMessage.js";

export default function LoginPage({ history }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {

    //     const userInfo = localStorage.getItem("userInfo");
    //     if (userInfo) {
    //         history.push("/notes")
    //     }

    // }, [history])

    async function submitHandle(e) {
        e.preventDefault();

        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }
            setLoading(true);

            const { data } = await axios.post("/api/users/login", {
                email, password
            }, config);

            localStorage.setItem("userInfo", JSON.stringify(data));

            setLoading(false);

        } catch (error) {
            setError("Invalid Email or Password");
            setLoading(false);
        }
    }

    return (
        <MainScreen title="LOGIN">
            <div className='form-css'>
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                {loading && <Loading />}
                <Form onSubmit={submitHandle}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} autoComplete="username" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" autoComplete="current-password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Row className="py-3">
                    <Col>
                        New Customer ? <Link to="/register" className="form-link">Register Here</Link>
                    </Col>
                </Row>
            </div>
        </MainScreen>
    );
}