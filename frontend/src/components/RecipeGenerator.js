import {useState} from "react";
import Container from "react-bootstrap/Container";
import {Button, Col, Form, Row} from "react-bootstrap";


function RecipeGenerator() {

    const [ingredients, setIngredients] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [dietaryRestrictions, setDietaryRestrictions] = useState('');
    const [recipe, setRecipe] = useState('');

    const generateRecipe = async () => {
        console.log("Generating recipe...");
        try {
            const response = await fetch(`http://localhost:8080/recipe-generator?ingredients=${ingredients}&dietaryRestrictions=${dietaryRestrictions}&cuisine=${cuisine}`)
            const recipeData = await response.text();
            // console.log("Generating recipe...", recipe);
            setRecipe(recipeData)
        }catch (e){
            console.log(e);
        }
    }

    return (
        <>
            <Container>
                <Row>
                    <Col className="justify-content-center">
                        <Form.Group className="mb-3" controlId="formGroupChat">
                            <Form.Label>Recipe Generator.</Form.Label>
                            <Form.Control
                                className="m-3"
                                value={ingredients}
                                onChange={(e)=>setIngredients(e.target.value)}
                                type="text"
                                placeholder="I can help you to cook anything. Enter ingtredients (comma seprated)."/>
                            <Form.Control
                                className="m-3"
                                value={cuisine}
                                onChange={(e)=>setCuisine(e.target.value)}
                                type="text"
                                placeholder="Enter your favorite Cuisine."/>
                            <Form.Control
                                className="m-3"
                                value={dietaryRestrictions}
                                onChange={(e)=>setDietaryRestrictions(e.target.value)}
                                type="text"
                                placeholder="Enter dietary restrictions."/>
                        </Form.Group>
                        <div className="">
                            <Button
                                variant="outline-primary"
                                type="submit"
                                className="m-1"
                                onClick={generateRecipe}>
                                Generate Recipe
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col>
                        <pre>{recipe}</pre>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default RecipeGenerator;