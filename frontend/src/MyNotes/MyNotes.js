import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../components/MainScreen";

export default function MyNotes() {
    return (

        <MainScreen title="Welcome Back Prabhat Sehrawat...">
            <Link to="createnotes">
                <Button size="lg" style={{ marginLeft: 10, marginRight: 6 }}>
                    Create New Notes
                </Button>
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
                        >{note.title}</span>
                        <Button href={`/note/${note._id}`}>Edit</Button>
                        <Button variant="danger" className="mx-2" onClick={() => deleteHandler(note._id)}>Delete</Button>
                    </Card.Header>
                    {/* <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                posuere erat a ante.{' '}
                            </p>
                            <footer className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </footer>
                        </blockquote>
                    </Card.Body> */}
                </Card>
            </Link>
        </MainScreen>
    );
}