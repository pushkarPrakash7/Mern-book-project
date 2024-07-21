import { useState ,useEffect} from 'react'
import BookCard from '../components/BookCard';
import {baseurl} from '../Links.js' 
function BestSellerBooks() {
    const [books,setBooks] = useState([]);
    useEffect(()=>{
        fetch(`${baseurl}/all-books`).then(res=>res.json()).then(data => setBooks(data.slice(0,12)))
    },[])
    return (
        <div>
            {books !== null ? ( 
                <BookCard books={books} headline="Best Seller Books" />
            ) : (
                <p>Loading...</p> 
            )}
        </div>
    );
}

export default BestSellerBooks
