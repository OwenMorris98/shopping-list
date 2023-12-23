import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useState, useEffect } from 'react';
import {useListState} from './hooks/useListState.ts'

function App() {
  
  const {listItems} = useListState();

  console.log(listItems);


  return (
    <div className="App">
      <ol> {listItems.map((item) => (
        <li key={item.id}>{item.name}</li>
        
  ))}   
      </ol>

     
        {/* <>
          <input type='text' name='cum' value={setListItems}/>
          <input type='submit' value='submit' />
        </> */}

  
    </div>
  );
}

export default App;
