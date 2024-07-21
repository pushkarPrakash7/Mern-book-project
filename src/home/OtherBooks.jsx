import { useState ,useEffect} from 'react'
import BookCard from '../components/BookCard';
import { baseurl } from '../Links';
function OtherBooks() {
    const [books,setBooks] = useState([]);
    useEffect(()=>{
        fetch(`${baseurl}/all-books`).then(res=>res.json()).then(data => setBooks(data.slice(8,)))
    },[])
    return (
        <div>
            {books !== null ? ( // Render BookCard only when books state is not null
                <BookCard books={books} headline="Explore Other Books" />
            ) : (
                <p>Loading...</p> // Render loading message while fetching data
            )}
        </div>
    );
}

export default OtherBooks
