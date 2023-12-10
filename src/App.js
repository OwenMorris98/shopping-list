import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useState, useEffect } from 'react';

function App() {
  const [listItems, setListItems] = useState([]);

  useEffect( () => {
      const fetchData = async () => {
          try {
              const response = await axios.get('https://localhost:7199/api/ShoppingListItems');
              setListItems(response.data);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
      fetchData();
  }, []);

  return (
    <div className="App">
      <ol> {listItems.map((item) => (
        <li key={item.id}>{item.name}</li>
        
  ))}
        
      </ol>
    </div>
  );
}

export default App;
