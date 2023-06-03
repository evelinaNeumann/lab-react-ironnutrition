import React, { useState } from 'react';
import './App.css';
import { Row, Col } from 'antd';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filteredFoodList, setFilteredFoodList] = useState(foods);

  const handleAddFood = (newFood) => {
    setFoodList([...foodList, newFood]);
    setFilteredFoodList([...filteredFoodList, newFood]);
  };

  const handleSearch = (searchValue) => {
    const filteredFoods = foodList.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredFoodList(filteredFoods);
  };

  const handleDeleteFood = (food) => {
    const updatedFoodList = foodList.filter((f) => f !== food);
    setFoodList(updatedFoodList);
    setFilteredFoodList(updatedFoodList);
  };

  return (
    <div className="App">
      <AddFoodForm onAddFood={handleAddFood} />
      <Search onSearch={handleSearch} />
      <Row gutter={[16, 16]}>
        {filteredFoodList.map((food, index) => (
          <Col span={8} key={index}>
            <FoodBox food={food} onDelete={handleDeleteFood} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;
