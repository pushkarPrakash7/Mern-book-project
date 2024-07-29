import { useContext, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

function SingleBook() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const {addToCart} = useContext(CartContext);

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success("Item added to cart");
  }

  const { _id, bookTitle, ImageURL, bookDescription, authorName, Category, price, bookPDFURL } = useLoaderData();

  const bookItem = {
    _id: _id,
    bookTitle: bookTitle,
    ImageURL: ImageURL,
    bookDescription: bookDescription,
    authorName: authorName,
    category: Category,
    price: price,
    bookPDFURL: bookPDFURL
  };
  return (
    <div className="bg-gray-300 px-4 py-8 lg:px-16 flex justify-center font-wittgenstein">
      <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-lg shadow-md w-full max-w-screen-lg">
        <div className="w-full md:w-1/3">
          <img src={ImageURL} className="w-full object-cover rounded-lg" alt={bookTitle}></img>
        </div>
        <div className="w-full md:w-2/3 px-4 py-2">
          <h1 className="text-2xl md:text-4xl font-bold underline">{bookTitle}</h1>
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <p className="text-lg md:text-xl my-2 md:my-4"><span>By </span>{authorName}</p>
            <p className="bg-[#343493] inline-block py-1 px-2 text-white rounded-md">{Category}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 my-2">
            <p className="text-2xl md:text-3xl font-semibold">₹{price}</p>
            <p className="line-through">₹{Math.round(parseInt(price, 10) + (parseInt(price, 10) * 0.16))}</p>
            <p className="font-semibold text-white bg-green-500 inline-block px-1 rounded-md">16% Off</p>
          </div>
          <p className="my-4">{bookDescription}</p>
          <div className="flex flex-col md:flex-row gap-2">
            <button className="w-full py-2 px-4 my-2 bg-[#343493] hover:bg-blue-600 transition duration-300 rounded-md text-white"><Link to={bookPDFURL}>Click Here to View PDF</Link></button>
            <button className="w-full py-2 px-4 my-2 bg-yellow-300 hover:bg-yellow-400 transition duration-300 rounded-md text-white" onClick={()=>handleAddToCart(bookItem)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBook;
