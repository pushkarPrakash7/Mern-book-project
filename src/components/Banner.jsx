import background from "../assets/background.mp4";

function Banner() {
  return (
    <div className='px-4 lg:px-24 bg-[#353593] flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-16'>
        {/* Left Side */}
        <div className='md:w-1/2 space-y-8 h-full text-center md:text-left'>
          <h2 className='text-3xl md:text-5xl font-bold leading-snug text-white'>
            Buy and Sell Your Books <span className='text-[#f1b94a]'>for the best Prices</span>
          </h2>
          <p className="md:w-4/5 text-white mx-auto md:mx-0">
            Welcome to Epic Reads, your ultimate book renting service! Explore a vast collection of genres, from mysteries to romances and non-fiction. Epic Reads offers an easy-to-use platform, making it simple to rent books affordably, with convenient delivery and return options.
          </p>
          <div className='flex md:flex-row justify-center md:justify-start items-center lg:gap-2'>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a book"
              className='py-2 px-2 rounded-l-md focus:outline-none flex-grow'
            />
            <button className='bg-[#f1b94a] text-black px-6 py-2 font-medium hover:bg-black hover:text-white transition-all ease-in duration-200 rounded-r-md '>
              Search
            </button>
          </div>
        </div>
        {/* Right Side */}
        <div className='w-full md:w-auto flex justify-center md:justify-end'>
            <video
              src={background}
              className="w-[300px] h-[300px] md:w-[500px] md:h-[450px] object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
        </div>
      </div>
    </div>
  );
}

export default Banner;
