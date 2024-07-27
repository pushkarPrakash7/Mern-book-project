/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { FaShoppingCart } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const BookCard = ({ headline, books }) => {
  return (
    <div className="my-16 px-2 lg:px-24">
      <h2 className="text-3xl lg:text-5xl text-center font-bold text-black pt-4">
        {headline}
      </h2>
      <div className="mt-12">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          loop={true}
          slidesPerView={2}
          spaceBetween={10}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            renderBullet: (index, className) => {
              return `<span class="${className} md:mx-1"></span>`;
            },
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
              pagination: false,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className} md:mx-1"></span>`;
                },
              },
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className} md:mx-1"></span>`;
                },
              },
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id} className="shadow-lg bg-white rounded-md p-2 mb-4 h-auto">
              <Link to={`/book/${book._id}`}>
                <div className="relative">
                  <img src={book.ImageURL} alt="" className="w-full h-auto rounded-md" />
                  <div className="absolute top-3 right-3">
                    <FaShoppingCart className="bg-[#353593] text-lg rounded-md text-white p-1 w-7 h-7 hover:bg-black" />
                  </div>
                </div>
                <div className="mt-2 text-center md:text-left">
                  <p className="font-medium text-lg">{book.bookTitle.length > 10 ? book.bookTitle.slice(0, 10) + "..." : book.bookTitle}</p>
                  <p className="text-gray-500">{book.authorName}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination hidden md:block"></div>
      </div>
    </div>
  );
};

export default BookCard;
