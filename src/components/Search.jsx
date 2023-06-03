import React, { useState } from 'react';
import { Input } from 'antd';

const Search = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (value) => {
    setSearchText(value);
    onSearch(value);
  };

  return (
    <Input.Search
      placeholder="Search food"
      value={searchText}
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};

export default Search;
