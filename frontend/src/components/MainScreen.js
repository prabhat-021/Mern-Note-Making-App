import { Container,Row } from "react-bootstrap";
import "./MainScreen.css";

export default function MainScreen({ title, children }) {
    return (
        <section className="mainback">
            <Container>
                <Row>
                    <div className="page">
                        {title && (<>
                            <h1 className="heading">{title}</h1>
                            <hr />
                        </>)}
                        {children}
                    </div>
                </Row>
            </Container>
        </section>
    );
}