import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router";

export default function LoginRequiredModal({ show, onHide }) {
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Accesso richiesto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Devi essere loggato per inviare un messaggio nella chat.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Chiudi
                </Button>
                <Button variant="primary" as={Link} to="/login">
                    Vai al login
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
