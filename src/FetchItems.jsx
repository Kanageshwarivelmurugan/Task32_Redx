// src/components/FetchItems.js
import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setItems } from './CartSlice';

const FetchItems = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('YOUR_JSON_URL'); // Ensure this URL is correct
        if (Array.isArray(response.data)) {
          dispatch(setItems(response.data));
        } else {
          console.error("Fetched data is not an array", response.data);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, [dispatch]);

  return null;
};

export default FetchItems;
