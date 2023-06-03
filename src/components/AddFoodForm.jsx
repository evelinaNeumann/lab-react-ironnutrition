import React, { useState } from "react";
import { Input, Button } from "antd";

function AddFoodForm({ onAddFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleAddFood = () => {
    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings
    };

    onAddFood(newFood);
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <div className="add-food-form">
      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Input
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />
      <Input
        placeholder="Servings"
        value={servings}
        onChange={(e) => setServings(e.target.value)}
      />
      <Button type="primary" onClick={handleAddFood}>Add Food</Button>
    </div>
  );
}

export default AddFoodForm;
