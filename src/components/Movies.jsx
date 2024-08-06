import React from "react";
import Card from "react-bootstrap/Card"

function Movies({ title, image, description, industry }) {
  return (
    <Card className="mb-4 bg-color text-white" id={industry}>
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Movies;
