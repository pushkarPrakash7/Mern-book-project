import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#9393cc]">
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4 lg:px-24">
          <div>
            <h3 className="text-white text-lg font-semibold">Company</h3>
            <ul className="mt-4 space-y-2 text-white">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/shop" className="hover:underline">Shop</a></li>
              <li><a href="/blog" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">Help Center</h3>
            <ul className="mt-4 space-y-2 text-white">
              <li><a href="#" className="hover:underline">Discord Server</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2 text-white">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Licensing</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">Download</h3>
            <ul className="mt-4 space-y-2 text-white">
              <li><a href="#" className="hover:underline">iOS</a></li>
              <li><a href="#" className="hover:underline">Android</a></li>
              <li><a href="#" className="hover:underline">Windows</a></li>
              <li><a href="#" className="hover:underline">MacOS</a></li>
            </ul>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 flex items-center justify-between">
          <p className="text-white">© 2024 EpicReads™</p>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center text-white">
            <a href="#" className="hover:text-gray-400"><BsFacebook size={20} /></a>
            <a href="#" className="hover:text-gray-400"><BsInstagram size={20} /></a>
            <a href="#" className="hover:text-gray-400"><BsTwitter size={20} /></a>
            <a href="#" className="hover:text-gray-400"><BsGithub size={20} /></a>
            <a href="#" className="hover:text-gray-400"><BsDribbble size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
