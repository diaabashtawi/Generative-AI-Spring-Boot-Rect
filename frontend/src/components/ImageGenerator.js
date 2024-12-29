import {useState} from "react";
import {Button, Col, Form, Image, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";


function ImageGenerator() {
    const [prompt, setPrompt] = useState('');
    const [imageUrls, setImageUrls] = useState([]);

    const generateImage = async () => {
        try {
            console.log("Generating image...");
            const response = await fetch(`http://localhost:8080/generate-image?prompt=${prompt}`)
            const urls = await response.json();
            // console.log("URL : ", urls);
            setImageUrls(urls);
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col>
                        <Form.Group className="mb-3" controlId="formImageGenerator">
                            <Form.Label>Image Generator</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter prompt for image"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                            />
                        </Form.Group>
                        <div className="d-grid gap-1">
                            <Button
                                variant="outline-primary"
                                type="submit"
                                className="m-1"
                                onClick={generateImage}>
                                Generate
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-1">
                    <Image src={ imageUrls[0] ? imageUrls[0] :  "/assets/img/download.svg"  } alt="Image Generator" fluid/>

                </Row>
            </Container>


        </>

    )
}


export default ImageGenerator;