import {useState, useEffect} from 'react'
import axios from 'axios';

export const useListState = () => {
 
    const [listItems, setListItems] = useState<any[]>([]);

    const [inputValue, setinputValue] = useState('');

    const handleInput = (event) => {
      setinputValue(event.target.value);
    };
  
    const handleSubmit = () => {
      if(inputValue.trim() !== '') {
        setListItems((currentItems) => [...currentItems, {name: inputValue}]);
        addToList(inputValue);
        setinputValue('');
      }
    };
  
  

    const addToList = async (itemToAdd) => { 
            try {
                // item to add as parameter...
                //same as {
                    //name: itemToAdd.name
                //}
                const response = await axios.post(`https://localhost:7199/api/ShoppingListItems/`, itemToAdd); // /ShoppingListItems/{class}
                setListItems((currentItems) => [...currentItems, response.data]);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
  

    };

    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7199/api/ShoppingListItems');
                setListItems(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    


    return {
        listItems, 
        handleInput,
        handleSubmit,
        inputValue

    }

}
