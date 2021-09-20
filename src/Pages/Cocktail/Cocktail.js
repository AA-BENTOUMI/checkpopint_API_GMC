import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Spinner, Card } from "react-bootstrap";
import "./Cocktail.css";
const Cocktail = ({ match, history }) => {
  const [cocktail, setCocktail] = useState({});
  const [load, setLoad] = useState(false);
  const [isError, setisEerror] = useState(false);

  useEffect(() => {
    const getCocktail = async () => {
      try {
        setLoad(true);
        let response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.idDrink}`
        );
        setCocktail(response.data.drinks[0]);
        setLoad(false);
      } catch (error) {
        setisEerror(true);
        setLoad(false);
      }
    };
    getCocktail();
  }, [match.params.idDrink]);
  return load ? (
    <Spinner animation="border" />
  ) : (
    <div>
      {isError ? (
        <h1>error to fetch</h1>
      ) : (
        <div>
          <h1>Welcome, this is the cocktail page</h1>
          <Card>
            <Card.Img
              variant="top"
              src={cocktail.strDrinkThumb}
              style={{ height: "25rem" }}
            />
            <Card.Body>
              <Card.Title>{cocktail.strDrink}</Card.Title>
              <Card.Text>
                <b className="Instructions">Instructions:</b>
                {cocktail.strInstructions}
              </Card.Text>
            </Card.Body>
            <Button
              variant="info"
              className="go-back-btn"
              onClick={() => history.goBack()}
            >
              Go Back
            </Button>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Cocktail;
