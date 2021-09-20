import React from "react";
import { Card, Button } from "react-bootstrap";
import "./CocktailCards.css";
import { Link } from "react-router-dom";
const CocktailCards = ({ data }) => {
  return (
    <div className="cocktail-Cards">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data.strDrinkThumb} />
        <Card.Body>
          <Card.Title>{data.strDrink}</Card.Title>
          <Card.Text>Category:{data.strCategory}</Card.Text>
          <Link to={`/Cocktails/Cocktail/${data.idDrink}`}>
            <Button variant="primary">More Metail</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CocktailCards;
