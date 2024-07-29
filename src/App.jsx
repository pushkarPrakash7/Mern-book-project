import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 
import "./styles/navbar.css";

function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
        <ToastContainer className="toast-container"  position="top-center" autoClose={3000} />
      </CartProvider>
    </>
  );
}

export default App;
