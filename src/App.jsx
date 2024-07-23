import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import { BooksContext } from "./context/AuthProvider"
import { initialState, cartReducer } from "./Reducer/CartReducers";
import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <>
      <BooksContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </BooksContext.Provider>
    </>
  );
}

export default App;
