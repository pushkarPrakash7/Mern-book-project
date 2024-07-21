import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useLocation } from "react-router-dom";

function SingleBook() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location]);

  const {bookTitle, ImageURL, bookDescription, authorName, Category, price } = useLoaderData();
  return (
    <div className="px-4 py-8 lg:px-16 flex flex-col md:flex-row gap-4 font-wittgenstein bg-gray-300">
      <div className="w-full md:w-1/3">
        <img src={ImageURL} className="w-full h-auto md:h-[580px] md:px-8 object-cover" alt={bookTitle}></img>
      </div>
      <div className="w-full md:w-2/3 px-4 py-2 bg-white rounded-lg">
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
          <button className="w-full py-2 px-4 my-2 bg-[#343493] hover:bg-blue-600 transition duration-300 rounded-md text-white">Click Here to View PDF</button>
          <button className="w-full  py-2 px-4 my-2 bg-yellow-300 hover:bg-yellow-400 transition duration-300 rounded-md text-white">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default SingleBook;
