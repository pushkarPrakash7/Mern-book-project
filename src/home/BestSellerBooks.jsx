import { useState ,useEffect} from 'react';
import BookCard from '../components/BookCard';
import {baseurl} from '../Links.js' 
function BestSellerBooks() {
    const [books,setBooks] = useState([]);
    useEffect(()=>{
        fetch(`${baseurl}/all-books`).then(res=>res.json()).then(data => setBooks(data.slice(0,8)))
    },[])
    return (
        <div className='bg-slate-400 md:mx-16 mx-1 rounded-md '>
            {books !== null ? ( 
                <BookCard books={books} headline="Best Seller Books" />
            ) : (
                <p>Loading...</p> 
            )}
        </div>
    );
}

export default BestSellerBooks
