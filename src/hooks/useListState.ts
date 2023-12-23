import {useState, useEffect} from 'react'
import axios from 'axios';

export const useListState = async () => {
 
    const [listItems, setListItems] = useState<any[]>([]);

    const addToList = async (itemToAdd) => {

        setListItems( currentItems => [...currentItems, itemToAdd])

        const postData = async () => {
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
        setListItems,
        addToList

    }

}
