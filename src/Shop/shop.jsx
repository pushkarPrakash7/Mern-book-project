/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { FaSort, FaShoppingCart, FaFilter } from "react-icons/fa";
import Shimmer from "./Shimmer";
import { baseurl } from "../Links.js";
import { CartContext } from "../context/CartContext.jsx";

function Shop() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const {addToCart} = useContext(CartContext);

  const location = useLocation();
  useEffect(() => {
    scrollTo(0, 0)
  }, [location]);

  useEffect(() => {
    fetch(`${baseurl}/all-books`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setFilteredBooks(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredBooks(books);
    } else {
      const filtered = books.filter((book) => book.Category === category);
      setFilteredBooks(filtered);
    }
    setSelectedCategory(category);
    scrollTo(0, 200);
    setFilterDropdownOpen(false);
  };

  const handleSort = (option) => {
    setSortOption(option);
    let sortedBooks = [...filteredBooks];
    if (option === "A-Z") {
      sortedBooks.sort((a, b) => a.bookTitle.localeCompare(b.bookTitle));
    } else if (option === "Z-A") {
      sortedBooks.sort((a, b) => b.bookTitle.localeCompare(a.bookTitle));
    }
    setFilteredBooks(sortedBooks);
  };

  const handleSearch = () => {
    const searchTermLowerCase = searchTerm.toLowerCase();
    const filtered = books.filter((book) =>
      book.bookTitle.toLowerCase().includes(searchTermLowerCase)
    );
    setFilteredBooks(filtered);
  };

  const handleSearchButtonClick = () => {
    handleSearch();
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    alert("Item added to Cart");
  }
  const categories = [
    "Adventure",
    "Arts",
    "Astrology",
    "Aesthetics",
    "Art and Design",
    "Atheism",
    "Autobiography",
    "Biography",
    "Buddhism",
    "Business",
    "Christianity",
    "Children's Book",
    "Cooking",
    "Epistemology",
    "Ethics",
    "Fantasy",
    "Fiction",
    "History",
    "Hinduism",
    "Horror",
    "Islam",
    "Judaism",
    "Logic",
    "Metaphysics",
    "Mystery",
    "Non-Fiction",
    "Novel",
    "Paganism",
    "Philosophy",
    "Poetry",
    "Programming",
    "Religion",
    "Romance",
    "Satanism",
    "Science Fiction",
    "Self-Help",
    "Spirituality",
    "Thriller",
    "Travel",
    "Witchcraft",
  ];

  return (
    <div className="mt-16 px-4 lg:px-24 font-wittgenstein">
      <h2 className="text-3xl lg:text-5xl font-bold text-center">
        Shop your favorite book here
      </h2>
      <div className="flex flex-wrap justify-center my-4">
        <div className="flex justify-center w-full lg:w-1/3 lg:my-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClick={()=>
              {setDropdownOpen(false)
              setFilterDropdownOpen(false)}}
            className="px-4 py-2 rounded-l-md flex-grow"
            placeholder="Search by book title..."
          />
          <button
            onClick={handleSearchButtonClick}
            className="px-4 py-2 bg-blue-600 text-white rounded-r-md"
          >
            Search
          </button>
        </div>
        <div className="flex justify-center w-full my-4">
          <button
            className="mr-2 px-4 py-2 rounded-full lg:hidden bg-gray-200 text-gray-700 focus:outline-none"
            onClick={() => {
              setFilterDropdownOpen(!filterDropdownOpen)
              setDropdownOpen(false)
            }}
          >
            <FaFilter />
          </button>
          <button
            className="mr-2 flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white focus:outline-none"
            onClick={() => {
              setDropdownOpen(!dropdownOpen)
              setFilterDropdownOpen(false)
            }}
          >
            Sort <FaSort />
          </button>
        </div>
        {filterDropdownOpen && (
          <div className="w-full lg:hidden z-50">
            <div className="origin-top-right absolute mt-2 w-5/6 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <button
                className={`block w-full text-left px-4 py-2 text-sm ${selectedCategory === "All"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700"
                  } hover:bg-blue-700 hover:text-white`}
                onClick={() => handleFilter("All")}
              >
                All Books
              </button>
              {categories.sort().map((category) => (
                <button
                  key={category}
                  className={`block w-full text-left px-4 py-2 text-sm ${selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "text-gray-700"
                    } hover:bg-blue-700 hover:text-white`}
                  onClick={() => handleFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="hidden lg:flex justify-center flex-wrap w-full">
          <button
            className={`mr-4 mb-4 px-4 py-2 rounded-md focus:outline-none ${selectedCategory === "All"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
              }`}
            onClick={() => handleFilter("All")}
          >
            All Books
          </button>
          {categories.sort().map((category) => (
            <button
              key={category}
              className={`mr-4 mb-4 px-4 py-2 rounded-md focus:outline-none ${selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
                }`}
              onClick={() => handleFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {dropdownOpen && (
          <div className="origin-top-left absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-10 focus:outline-none">
            <div
              className="flex py-1">
              <button
                onClick={() => handleSort("A-Z")}
                className="block ml-4 px-2 py-2 text-sm text-gray-700 hover:bg-blue-700 hover:text-white hover:rounded-md"
              >
                Sort A-Z
              </button>
              <button
                onClick={() => handleSort("Z-A")}
                className="block ml-4 px-2 py-2 text-sm text-gray-700 hover:bg-blue-700 hover:text-white hover:rounded-md"
              >
                Sort Z-A
              </button>
            </div>
          </div>
        )}
      </div>
      {loading ? (
        <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
          {[...Array(8)].map((_, index) => (
            <Shimmer key={index} />
          ))}
        </div>
      ) : filteredBooks.length === 0 ? (
        <h1 className="text-center text-4xl mt-8 font-bold">Oops! No book found.</h1>
      ) : (
        <div className="grid gap-8 my-12 lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
          {filteredBooks.map((book) => (
            <Card
              key={book._id}
              className="max-w-xs mx-auto relative my-4 rounded-md shadow-2xl p-2 ring-2 ring-black ring-opacity-10"
              imgAlt="Book Image"
              imgSrc={book.ImageURL}
            >
              <div className="">
                <Link to={`/book/${book._id}`} className="hover:underline hover:text-blue-600 transform duration-300">
                  <h5 className="text-left text-xl font-bold text-gray-900 hover:text-blue-600 transform duration-300 ">
                    {book.bookTitle.length > 30 ? book.bookTitle.slice(0, 30) + "..." : book.bookTitle}
                  </h5>
                </Link>
                <h3 className="text-gray-700 dark:text-gray-400">{book.authorName}</h3>
                <div className="flex gap-4 items-center">
                  <h3 className="font-semibold">₹{book.price}</h3>
                  <h3 className="bg-blue-600 text-white rounded-md px-2 inline-block my-1">{book.Category}</h3>
                </div>
              </div>
              <button className="absolute top-4 right-4 text-white bg-blue-600 font-medium rounded-full p-2 shadow-md hover:bg-blue-700" onClick={()=> handleAddToCart(book)}>
                <FaShoppingCart />
              </button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default Shop;
