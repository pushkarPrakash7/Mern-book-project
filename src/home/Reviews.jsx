/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import userImg1 from "../assets/ava-1.jpg";
import userImg2 from "../assets/ava-2.jpg";
import userImg3 from "../assets/ava-3.jpg";
import userImg4 from "../assets/ava-4.jpg";
import userImg5 from "../assets/ava-5.jpg";
import { Avatar } from "flowbite-react";

function Reviews() {
  return (
    <div className="my-12 px-4 lg:px-24 bg-slate-400 mx-4 py-4 md:py-0 rounded-md">
      <h2 className="text-3xl pt-4 lg:text-5xl font-bold text-center mb-10 leading-snug">
        Reviews from the Users
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:mb-8 rounded-lg border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="mt-7">
              <p className="mb-5">
                Impeccable selection, swift shipping. A literary paradise!
                Customer service exceeds expectations. Will be returning.
              </p>
              <Avatar img={userImg1} alt="avatar of Jese" rounded className="w-10 mb-4" />
              <h5 className="text-lg font-medium">John Doe</h5>
              <p className="text-base">CEO, BlueRay Publications.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:mb-2 rounded-lg border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="mt-7">
              <p className="mb-5">
                Exceptional variety and service! My go-to for all book needs.
                Prompt delivery and well-packaged items.
              </p>
              <Avatar img={userImg2} alt="avatar of Jese" rounded className="w-10 mb-4" />
              <h5 className="text-lg font-medium">Emily Watson</h5>
              <p className="text-base">Freelance Editor</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:mb-2 rounded-lg border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="mt-7">
              <p className="mb-5">
                Incredible range of titles. Seamless online experience. Fast
                delivery. A book lover's dream come true
              </p>
              <Avatar img={userImg3} alt="avatar of Jese" rounded className="w-10 mb-4" />
              <h5 className="text-lg font-medium">Samuel Greene</h5>
              <p className="text-base">Journalist</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:mb-2 rounded-lg border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            <div className="mt-7">
              <p className="mb-5">
                Absolutely delighted with my purchases. Speedy delivery,
                pristine condition. Will definitely be shopping here again
              </p>
              <Avatar img={userImg4} alt="avatar of Jese" rounded className="w-10 mb-4" />
              <h5 className="text-lg font-medium">Sarah Mitchell</h5>
              <p className="text-base">Book Blogger</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:mb-2 rounded-lg border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            <div className="mt-7">
              <p className="mb-5">
                Top-notch service! Wide array of genres. Timely shipping.
                Couldn't ask for a better bookstore!
              </p>
              <Avatar img={userImg5} alt="avatar of Jese" rounded className="w-10 mb-4" />
              <h5 className="text-lg font-medium">Rachel Benett</h5>
              <p className="text-base">Author</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Reviews;
