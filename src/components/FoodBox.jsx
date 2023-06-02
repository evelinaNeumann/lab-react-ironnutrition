import React from 'react';
import { Card, Row, Col, Divider, Input, Button } from "antd";

function FoodBox({ food }) {
  return (
    <Card title={food.name} style={{ width: 300 }}>
      <img src={food.image} alt={food.name} style={{ width: 200, height: 200 }} />
      <Divider />
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <Button>Add to Cart</Button>
    </Card>
  );
}

export default FoodBox;
