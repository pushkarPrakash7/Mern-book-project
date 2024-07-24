import { useEffect, useState } from "react";
import { baseurl } from "../Links";
import { useLocation } from "react-router-dom";
import BookCard from "./BookCard";
import awardImage from "../assets/award.png";

function MysteryBooks() {
    const [books, setBooks] = useState([]);

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        fetch(`${baseurl}/all-books/mystery`)
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    console.log(books);
    return (
        <div className="text-center font-wittgenstein px-4 lg:px-16">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8">
                <h1 className="mt-4 text-3xl lg:text-4xl font-bold lg:px-24">
                    Here are the books nominated from the Category <span className="text-[#343493]">Mystery</span>
                </h1>
                <img src={awardImage} className="w-32 lg:w-48 my-8 lg:my-0" alt="Award" />
            </div>
            <div>
                <BookCard headline="" books={books} />
            </div>
        </div>
    );
}

export default MysteryBooks;
