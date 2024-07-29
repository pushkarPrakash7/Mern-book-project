import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import { baseurl } from "../Links.js"
import { toast } from "react-toastify";

function UploadBooks() {
  const bookCategories = [
    "--Select Category--",
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
    "Memoir",
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
    "Satansim",
    "Science Fiction",
    "Self-Help",
    "Spirituality",
    "Thriller",
    "Travel",
    "Wicca",
    "Witchcraft",
  ];
  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );
  const handleChangeSelectedValue = (e) => {
    setSelectedBookCategory(e.target.value);
  };

  const handleBookSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const ImageURL = form.ImageURL.value;
    const Category = form.Category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    const price = form.price.value;

    const bookObj = {
      bookTitle,
      authorName,
      ImageURL,
      Category,
      bookDescription,
      bookPDFURL,
      price,
    };
    
    fetch(`${baseurl}/upload-book`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      // eslint-disable-next-line no-unused-vars
      .then((data) => {
        toast.success("Book uploaded successfully!");
        form.reset();
      });

  }
  return (
    <div className="my-12 px-4 md:px-6 ">
      <h2 className="mb-8 text-3xl font-bold font-wittgenstein my-4 md:my-2">Upload A Book</h2>
      <form
        onSubmit={handleBookSubmit}
        className="flex lg:w-[1000px] flex-col flex-wrap gap-4"
      >
        <div className="md:flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book Title"
              required
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author Name"
              required
            />
          </div>
        </div>
        {/*Second Row*/}
        <div className="md:flex gap-8">
          <div className="lg:w-1/2">
            {/*Book Image URL*/}
            <div className="mb-2 block">
              <Label htmlFor="ImageURL" value="Image URL" />
            </div>
            <TextInput
              id="ImageURL"
              name="ImageURL"
              type="text"
              placeholder="Image URL"
              required
            />
          </div>
          <div className="lg:w-1/2">
            {/*Category*/}
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <select
              className="bg-[#f9fafb] rounded-lg text-sm w-full border-[#d1d5db] py-2.5 text-[#6b7280]"
              id="inputState"
              name="Category"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Book Descriptions */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            name="bookDescription"
            type="text"
            placeholder="Write your Book Description"
            className="w-full"
            rows={4}
            required
          />
        </div>
        {/* Book PDF Link */}
        <div className="md:flex gap-8">
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPDFURL"
            name="bookPDFURL"
            type="text"
            placeholder="Book PDF URL"
            required
          />
        </div>
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="price" value="Price of the Book" />
          </div>
          <TextInput
            id="price"
            name="price"
            type="text"
            placeholder="Price in Ruppees"
            required
          />
        </div>
        </div>
        <Button type="submit" className="mt-5">
          Upload Book
        </Button>
      </form>
    </div>
  );
}

export default UploadBooks;
