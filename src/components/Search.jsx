/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseurl } from "../Links";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Search() {
    const navigate = useNavigate();
    const query = useQuery();
    const [searchText, setSearchText] = useState(query.get("query") || "");
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const location = useLocation();

    useEffect(()=>{
        window.scrollTo(0,0);
    },[location]);

    useEffect(() => {
        axios.get(`${baseurl}/all-books`)
            .then(response => {
                setBooks(response.data);
                filterBooks(response.data, searchText);
            })
            .catch(error => {
                console.error("Error fetching the books data:", error);
            });
    }, [searchText]);

    const filterBooks = (books, query) => {
        if (!query) {
            setFilteredBooks(books);
            return;
        }

        const lowerCaseQuery = query.toLowerCase();
        const filtered = books.filter(book =>
            book.bookTitle.toLowerCase().includes(lowerCaseQuery) ||
            book.Category.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredBooks(filtered);
    };

    const handleSearch = () => {
        navigate(`/search?query=${encodeURIComponent(searchText)}`);
    };

    return (
        <div className="font-wittgenstein">
            {searchText? (<div>
                <h1 className="text-center mt-8 font-bold text-2xl md:text-3xl">Search Results</h1>
                <p className="text-center font-bold text-2xl md:text-3xl">Searching for: <span className="text-[#353593]">{searchText}</span></p>
            </div>):(
                <div>
                    <h1 className="text-center mt-8 font-bold text-2xl md:text-3xl underline">Search for a book here</h1>
                </div>
            )}
            <div className="flex justify-center items-center mt-4 mb-4">
                <input
                    className="border border-gray-300 p-2 rounded-l-md focus:outline-none w-2/3 md:w-1/2 lg:w-1/3"
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search for a book or category"
                />
                <button
                    className="bg-[#f1b94a] text-black px-4 py-2 rounded-r-md hover:bg-black hover:text-white transition-all ease-in duration-200"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            <div>
                {filteredBooks.length > 0 ? (
                    filteredBooks.map(book => (
                        <div key={book._id} className="px-4 py-8 lg:px-16 flex justify-center font-wittgenstein">
                            <div className="flex flex-col md:flex-row gap-4 bg-gray-300 p-4 rounded-lg shadow-md w-full max-w-screen-lg">
                                <div className="w-full md:w-1/3">
                                    <img src={book.ImageURL} className="w-full object-cover rounded-lg" alt={book.bookTitle} />
                                </div>
                                <div className="w-full md:w-2/3 px-4 py-2">
                                    <h1 className="text-2xl md:text-4xl font-bold underline">{book.bookTitle}</h1>
                                    <div className="flex flex-wrap items-center gap-4 mt-2">
                                        <p className="text-lg md:text-xl my-2 md:my-4"><span>By </span>{book.authorName}</p>
                                        <p className="bg-[#343493] inline-block py-1 px-2 text-white rounded-md">{book.Category}</p>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-4 my-2">
                                        <p className="text-2xl md:text-3xl font-semibold">₹{book.price}</p>
                                        <p className="line-through">₹{Math.round(parseInt(book.price, 10) + (parseInt(book.price, 10) * 0.16))}</p>
                                        <p className="font-semibold text-white bg-green-500 inline-block px-1 rounded-md">16% Off</p>
                                    </div>
                                    <p className="my-4">{book.bookDescription}</p>
                                    <div className="flex flex-col md:flex-row gap-2">
                                        <button className="w-full py-2 px-4 my-2 bg-[#343493] hover:bg-blue-600 transition duration-300 rounded-md text-white">
                                            <Link to={book.bookPDFURL}>Click Here to View PDF</Link>
                                        </button>
                                        <button className="w-full py-2 px-4 my-2 bg-yellow-300 hover:bg-yellow-400 transition duration-300 rounded-md text-white">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center mt-8 font-bold text-3xl">No books found</p>
                )}
            </div>
        </div>
    );
}

export default Search;
