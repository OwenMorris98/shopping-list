import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useState, useEffect } from 'react';
import {useListState} from './hooks/useListState.ts'


function App() {
  
  const { listItems, handleInput, handleSubmit, inputValue } = useListState()
  
  return (
    <div className="App">
      <ol> {listItems.map((item) => (
        <li key={item.id}>{item.name}</li>
        
  ))}
        
      </ol>

      <>
      <input type='text' value={inputValue} onChange={handleInput}/>
      <input type='submit' value='submit' onClick={handleSubmit}/>
      </>
    </div>
  );
}

export default App;
