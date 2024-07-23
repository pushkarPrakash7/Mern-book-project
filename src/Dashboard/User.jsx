import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Label, TextInput, Spinner } from "flowbite-react";
import { Link } from "react-router-dom";
import ProfileImage from "../assets/profile.jpg";
function User() {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user !== null) {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size="xl" />
      </div>
    );
  }

  
  return (
    <div className="p-4 md:p-8 lg:p-12 w-full">
      <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">User Profile</h1>
      <div className="flex flex-col md:flex-row items-center mt-8 gap-4">
        <div className="flex-shrink-0">
          {user?.photoURL === null ? (<img className="rounded-full w-24 h-24 md:w-32 md:h-32" src={ProfileImage} alt="User Profile" />):
            (<img className="rounded-full w-24 h-24 md:w-32 md:h-32" src={user?.photoURL} alt="User Profile" />)}
        </div>
        <p className="text-lg md:text-xl font-semibold">{user.displayName}</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-16">
        <div className="flex flex-col gap-4 md:w-1/2">
          <Label htmlFor="email" className="mt-4">Email</Label>
          <TextInput
            type="text"
            id="email"
            placeholder="Email"
            value={user.email || ""}
            disabled
          />
        </div>
        <div className="flex flex-col gap-4 md:w-1/2">
          <Label htmlFor="username" className="mt-4">UserName</Label>
          <TextInput
            type="text"
            id="username"
            placeholder="User Name"
            value={user.displayName || ""}
            disabled
            readOnly
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <div className="flex flex-col gap-4 md:w-1/2">
          <Label htmlFor="user-id" className="mt-4">User Id</Label>
          <TextInput
            type="text"
            id="user-id"
            placeholder="User Id"
            value={user.uid || ""}
            disabled
          />
        </div>
        <div className="flex flex-col gap-4 md:w-1/2">
          <Label htmlFor="phone-number" className="mt-4">Phone Number</Label>
          <TextInput
            type="text"
            id="phone-number"
            placeholder="Phone Number"
            value={user.phoneNumber || ""}
            disabled
            readOnly
          />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/logout">
          <button className="bg-blue-500 px-4 py-2 rounded-md text-white">
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default User;
