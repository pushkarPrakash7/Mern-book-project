import PromoImage from "../assets/bookPromo.jpg";

function PromoBanner() {
  return (
    <div className="flex flex-col md:flex-row items-center mt-16 md:mt-32 bg-[#e5dad8] h-auto md:h-48 mb-16 md:mb-32">
      <div className="md:ml-56 p-4 md:p-0">
        <img src={PromoImage} className="w-48 h-48 md:w-96 md:h-96 mx-auto md:mx-0" alt="Promo" />
      </div>
      <div className="p-4 md:p-8 text-center md:text-left">
        <h3 className="text-2xl md:text-4xl font-bold">
          2023 National Book Awards for Mystery Shortlist.
        </h3>
        <button className="bg-[#343493] text-white p-2 font-bold mt-2 rounded-sm">
          Explore Now
        </button>
      </div>
    </div>
  );
}

export default PromoBanner;
