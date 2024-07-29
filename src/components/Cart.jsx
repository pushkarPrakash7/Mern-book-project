/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { FaTimes, FaTrash } from "react-icons/fa";
import { IoIosRemove, IoIosAdd } from "react-icons/io";
import { useLocation } from "react-router-dom";
import {toast} from "react-toastify"
function Cart({ isOpen, onClose }) {
    const { cartItems, setCartItems } = useContext(CartContext);
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const handleIncreaseQuantity = (index) => {
        const newCartItems = [...cartItems];
        newCartItems[index].quantity += 1;
        setCartItems(newCartItems);
    };

    const handleDecreaseQuantity = (index) => {
        const newCartItems = [...cartItems];
        if (newCartItems[index].quantity > 1) {
            newCartItems[index].quantity -= 1;
        }
        else{
            toast.error("Cannot decrease quantity below 1");
            return;
        }
        setCartItems(newCartItems);
    };

    const handleRemoveItem = (index) => {
        const newCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(newCartItems);
        toast.success("Item removed successfully");
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            return total + item.quantity * parseInt(item.price, 10);
        }, 0);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-gray-800 m-4 md:m-0">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Cart {cartItems.length > 0 && <span>({cartItems.length})</span>}</h2>
                    <button onClick={onClose} className="text-gray-700">
                        <FaTimes className="text-xl" />
                    </button>
                </div>
                <div className="mt-4 text-black">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        <>
                            <ul>
                                {cartItems.map((item) => {
                                    const originalIndex = cartItems.findIndex(cartItem => cartItem._id === item._id);
                                    return (
                                        <li key={item._id} className="border-b py-2">
                                            <div className="flex items-center gap-4">
                                                <div className="h-20 w-12">
                                                    <img className="w-full h-full rounded-md" src={item.ImageURL} alt={item.bookTitle} />
                                                </div>
                                                <div className="flex flex-col justify-between items-start flex-1">
                                                    <span className="text-lg font-bold">{item.bookTitle}</span>
                                                    <span className="font-semibold">{item.authorName}</span>
                                                    <div className="flex justify-between items-center w-full mt-2">
                                                        <div className="flex items-center">
                                                            <button className="bg-[#353593] text-white h-6 w-6 flex justify-center items-center rounded-l-md" onClick={() => handleDecreaseQuantity(originalIndex)}><IoIosRemove /></button>
                                                            <span className="h-5 w-5 text-xs font-semibold ring-[#353593] ring-2 flex justify-center items-center ">{item.quantity}</span>
                                                            <button className="bg-[#353593] text-white h-6 w-6 flex justify-center items-center rounded-r-md" onClick={() => handleIncreaseQuantity(originalIndex)}><IoIosAdd /></button>


                                                            <button
                                                                className="text-white flex justify-center items-center ml-2 h-6 w-6 text-sm bg-red-600 rounded-md p-1"
                                                                onClick={() => handleRemoveItem(originalIndex)}
                                                            >
                                                                <FaTrash />
                                                            </button>
                                                        </div>
                                                        <div className="ml-4">
                                                            <span className="font-semibold">₹{item.quantity * parseInt(item.price, 10)}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-2">
                                <span className="text-center font-bold text-white bg-blue-600 w-full md:w-2/3 p-2 rounded-3xl">Total: ₹{calculateTotalPrice()}</span>
                                <button className="bg-green-600 text-white w-full md:w-1/3 p-2 rounded-3xl font-semibold">Proceed to Pay</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cart;
