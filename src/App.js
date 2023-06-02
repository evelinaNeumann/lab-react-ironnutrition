import React, { useState } from 'react';
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from "antd";
import foods from "./foods.json";
import FoodBox from './components/FoodBox';

function App() {
  const [foodList, setFoodList] = useState(foods);

  return (
    <div className="App">
      {foodList.map((food, index) => (
        <FoodBox key={index} food={food} />
      ))}
    </div>
  );
}

export default App;
