import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

function Logout() {
  const { logoutUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        alert("Logged out Successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Logout failed: ", error);
        alert("Failed to log out. Please try again.");
      });
  };

  return (
    <div className="h-screen bg-[#343492] flex flex-col justify-center">
      <h1 className="text-4xl text-white font-semibold text-center">
        Are you sure you want to logout?
      </h1>
      <div className="mt-8 flex items-center gap-4 justify-center">
        <button className="py-2 px-5 rounded-md bg-[#939ecd] text-black font-semibold">
          <Link to="/admin/dashboard">Go Back</Link>
        </button>
        <button
          className="py-2 px-5 rounded-md bg-[#f3b94f] text-black font-semibold"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Logout;
