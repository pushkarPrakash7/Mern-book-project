import { useState, useContext } from "react";
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards, HiMenu } from "react-icons/hi";
import { IoCloudUploadOutline } from "react-icons/io5";
import { AuthContext } from "../context/AuthProvider";
import ProfileImage from "../assets/profile.jpg";
function SidebarComponent() {
  const { user } = useContext(AuthContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-200 text-gray-700 rounded-md"
      >
        <HiMenu size={24} />
      </button>
      <Sidebar
        aria-label="Sidebar with content separator example"
        className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-40 md:z-auto`}
      >
        <div className="ml-2 my-4 flex items-center gap-2">
        {user?.photoURL === null ? (<img className="rounded-full w-6 h-6 md:w-12 md:h-12" src={ProfileImage} alt="User Profile" />):
        (<img className="rounded-full w-6 h-6 md:w-12 md:h-12" src={user?.photoURL} alt="User Profile" />)}
          <p className="font-bold">{user?.displayName || user?.email.split('@')[0]}</p>
        </div>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/upload-books" icon={IoCloudUploadOutline}>
              Upload Book
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/manage-books" icon={HiInbox}>
              Manage Inventory
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/user" icon={HiUser}>
              Profile
            </Sidebar.Item>
            <Sidebar.Item href="/shop" icon={HiShoppingBag}>
              Products
            </Sidebar.Item>
            <Sidebar.Item href="/blog" icon={HiArrowSmRight}>
              Blog
            </Sidebar.Item>
            <Sidebar.Item href="/logout" icon={HiTable}>
              Log Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Upgrade to Pro
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              Documentation
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiBuoy}>
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 md:hidden z-30"
        />
      )}
    </div>
  );
}

export default SidebarComponent;
