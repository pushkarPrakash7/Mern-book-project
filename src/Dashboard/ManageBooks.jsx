import { Table} from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseurl } from "../Links";
function ManageBooks() {
  const [allBooks, setAllBooks] = useState([]);


  useEffect(() => {
    fetch(`${baseurl}/all-books`)
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  const handleDelete=(id)=>{
    fetch(`${baseurl}/book/${id}`,{
      method:"DELETE"
    }).then(res=>res.json()).then(data=>{
      if(data.deletedCount===1){
        alert("Book Deleted Successfully");
        setAllBooks(data);
        window.location.reload()
      }
    })
  }

  return (
    <div className="px-4 my-12">
      <h2 className="my-8 md:my-0 md:mb-8 text-3xl font-bold font-wittgenstein">Manage Your Books</h2>
      <Table striped className="lg:w-[1020px]">
        <Table.Head>
          <Table.HeadCell>Serial No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {allBooks.map((book, index) => (
          <Table.Body className="divide-y" key={book._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index+1}
              </Table.Cell>
              <Table.Cell>{book.bookTitle}</Table.Cell>
              <Table.Cell>{book.authorName}</Table.Cell>
              <Table.Cell>{book.Category}</Table.Cell>
              <Table.Cell>₹{book.price}</Table.Cell>
              <Table.Cell className="flex gap-4 items-center">
                <Link
                  to={`/admin/dashboard/edit-books/${book._id}`}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 "
                >
                  Edit
                </Link>
                <button onClick={()=> handleDelete(book._id)} className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-black">Delete</button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
}

export default ManageBooks;
