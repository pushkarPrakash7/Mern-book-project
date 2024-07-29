import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import { CartProvider } from "./context/CartContext.jsx";

function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
