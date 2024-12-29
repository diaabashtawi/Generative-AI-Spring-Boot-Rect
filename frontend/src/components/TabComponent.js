import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import ImageGenerator from "./ImageGenerator";
import Chat from "./Chat";
import RecipeGenerator from "./RecipeGenerator";

function TabComponent() {
    return (
        <>
            <Container fluid="md">
                <Row>
                    <Col className="m-3 font-monospace">
                        <Tabs
                            defaultActiveKey="ImageGenerator"
                            id="justify-tab-example"
                            className="mb-3"
                            justify
                        >
                            <Tab eventKey="ImageGenerator" title="Image Generator">
                                <ImageGenerator/>
                            </Tab>
                            <Tab eventKey="Chat" title="Chat">
                                <Chat/>
                            </Tab>
                            <Tab eventKey="Recipe Generator" title="Recipe Generator">
                                <RecipeGenerator/>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>

                    </Col>
                </Row>
            </Container>
        </>

    );
}

export default TabComponent;