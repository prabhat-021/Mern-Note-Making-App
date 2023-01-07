import { useEffect, useState } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../components/MainScreen";
import axios from "axios";

export default function MyNotes() {

    const [notes, setNotes] = useState([]);

    const fetchNotes = async () => {
        const { data } = await axios.get("/api/notes");

        setNotes(data);
    }

    useEffect(() => {
        fetchNotes();
    }, [])


    function deleteHandler(id) {
        if (window.confirm("Are you sure?")) {
        }
    }
    return (

        <MainScreen title="Welcome Back Prabhat Sehrawat...">
            <Link to="createnotes">
                <Button size="lg" style={{ marginLeft: 10, marginRight: 6 }}>
                    Create New Notes
                </Button>
            </Link>

            {
                notes.map(note => (
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
                                            Created on date
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