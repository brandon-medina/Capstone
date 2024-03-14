import { useContext } from 'react';
import { CartContext } from '../components/CartProvider'; // Adjust the import path as needed

export const useCart = () => useContext(CartContext);