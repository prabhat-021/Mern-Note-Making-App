import { useEffect } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import MainScreen from "../components/MainScreen";
import { useDispatch, useSelector } from 'react-redux';
import { listNotes } from "../actions/notesAction";
import Loading from "../components/Loading.js";
import Error from "../components/ErrorMessage.js";

export default function MyNotes() {

    const dispatch = useDispatch();
    const noteList = useSelector((state) => state.noteList);
    const { loading, error, notes } = noteList;
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const navigate = useNavigate();
    const noteCreate = useSelector((state) => state.noteCreate);
    const { success: successCreate } = noteCreate;

    useEffect(() => {
        dispatch(listNotes());
        if (!userInfo) {
            navigate("/");
        }
    }, [dispatch, navigate, userInfo , successCreate])


    function deleteHandler(id) {
        if (window.confirm("Are you sure?")) {
        }
    }
    return (

        <MainScreen title={`Welcome Back ${userInfo.name}...`}>
            <Link to="/createnotes">
                <Button size="lg" style={{ marginLeft: 10, marginRight: 6 }}>
                    Create New Notes
                </Button>
            </Link>

            {error && <Error variant="danger">{error}</Error>}
            {loading && <Loading />}

            {
                notes?.map(note => (
                    <Accordion defaultActiveKey="0" key={note._id}>
                        <Card style={{ margin: 10 }}>
                            <Card.Header style={{ display: "flex" }}>
                                <span
                                    style={{
                                        color: "black",
                                        textDecoration: "none",
                                        flex: 1,
                                        cursor: "pointer",
                                        alignSelf: "center",
                                        fontSize: 18,
                                    }}
                                >
                                    <Accordion.Header
                                        as={Card.Text}
                                        variant="link"
                                        eventkey="0"
                                    >
                                        {note.title}
                                    </Accordion.Header>
                                </span>
                                <Button href={`/note/${note._id}`}>Edit</Button>
                                <Button variant="danger" className="mx-2" onClick={() => deleteHandler(note._id)}>Delete</Button>
                            </Card.Header>
                            <Accordion.Body eventkey="0">
                                <Card.Body>
                                    <h4>
                                        <Badge variant="success" >
                                            Category - {note.category}
                                        </Badge>
                                    </h4>
                                    <blockquote className="blockquote mb-0">
                                        <p>
                                            {note.content}
                                        </p>
                                        <footer className="blockquote-footer">
                                            Created on:- {" "}
                                            <cite title="Source Title">
                                                {note.createdAt.substring(0, 10)}
                                            </cite>
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Accordion.Body>
                        </Card>
                    </Accordion>
                ))
            }
        </MainScreen>
    );
}