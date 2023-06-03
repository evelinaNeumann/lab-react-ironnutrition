import React from 'react';
import { Card, Button } from 'antd';

const FoodBox = ({ food, onDelete }) => {
  const handleDelete = () => {
    onDelete(food);
  };

  return (
    <Card title={food.name}>
      <img src={food.image} alt={food.name} style={{ width: '100px', height: '100px' }} />
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <Button type="danger" onClick={handleDelete}>
        Delete
      </Button>
    </Card>
  );
};

export default FoodBox;
