import Container from "react-bootstrap/Container";
import {Col, Row, Form, Button} from "react-bootstrap";
import {useState} from "react";


function Chat() {

    const [prompt, setPrompt] = useState('');
    const [chatResponse, setChatResponse] = useState('');

    const generateChat = async ()=> {
        try {
            const response = await fetch(`http://localhost:8080/ask-ai?prompt=${prompt}`)
            const chatResponse = await response.text();
            console.log("Chat response: ", chatResponse);
            setChatResponse(chatResponse);
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formGroupChat">
                            <Form.Label>Chat with me, ask me anything.</Form.Label>
                            <Form.Control
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                type="text"
                                placeholder="Ask me anything."/>
                        </Form.Group>
                        <div className="d-grid gap-1">
                            <Button
                                variant="outline-primary"
                                type="submit"
                                className="m-1"
                                onClick={generateChat}>
                                Ask
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col>
                        <p>{chatResponse}</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default Chat;