import Banner from "../components/Banner";
import BestSellerBooks from "./BestSellerBooks";
import FavBooks from "./FavBooks";
import OtherBooks from "./OtherBooks";
import PromoBanner from "./PromoBanner";
import Reviews from "./Reviews";
function Home() {
  return(
    <div className="font-wittgenstein">
      <Banner/>
      <BestSellerBooks />
      <FavBooks />
      <PromoBanner />
      <OtherBooks />
      <Reviews />
    </div>
  )
}

export default Home;
