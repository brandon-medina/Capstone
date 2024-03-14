import { useContext } from 'react';
import { CartContext } from '../providers/CartProvider'; // Adjust the import path as needed

export const useCart = () => useContext(CartContext);