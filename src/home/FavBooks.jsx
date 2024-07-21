import FavBookImg from "../assets/FavBookImg.jpg";

function FavBooks() {
  return (
    <div className="relative h-[700px] lg:h-[540px]"> {/* Increased height for small screens */}
      <img src={FavBookImg} className="w-full h-full object-cover opacity-20 absolute" alt="Favorite Book Background" />
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center z-10 p-4 md:p-8 lg:p-16">
        <div className="text-black w-full md:w-1/2 p-4 lg:p-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center md:text-left">
            Find Your Favorite <span className="text-[#343493]">Book Here!</span>
          </h1>
          <p className="text-md md:text-lg lg:text-xl mt-4 text-center md:text-left">
            Explore our top-rated picks, curated to your taste! Dive into acclaimed masterpieces and hidden gems loved by readers like you. From thrilling adventures to heartwarming tales, discover a diverse array of literature tailored to resonate with your preferences. Elevate your reading experience with our meticulously selected collection.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-4 lg:p-8 mt-4 md:mt-0 flex flex-col items-center md:items-start">
          <div className="flex md:flex-row gap-8">
            <div className="flex flex-col items-center md:items-start mt-4">
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold">800+</span>
              <span className="text-md md:text-lg lg:text-xl">Book Listing</span>
            </div>
            <div className="flex flex-col items-center md:items-start mt-4">
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold">550+</span>
              <span className="text-md md:text-lg lg:text-xl">Registered Users</span>
            </div>
            <div className="flex flex-col items-center md:items-start mt-4">
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold">1200+</span>
              <span className="text-md md:text-lg lg:text-xl">PDF Downloads</span>
            </div>
          </div>
          <button className="bg-[#343493] text-white p-2 font-bold mt-4 rounded-sm md:self-start">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavBooks;
