// src/components/FetchProducts.js
import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProducts } from './CartSlice';

const FetchProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('YOUR_JSON_URL'); // Replace with your JSON URL
        if (response.data && Array.isArray(response.data.products)) {
          dispatch(setProducts(response.data.products));
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

export default FetchProducts;
