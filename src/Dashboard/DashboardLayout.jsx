import { Outlet } from "react-router-dom"

import SidebarComponent from "./Sidebar"
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function DashboardLayout() {
    return (
        <div className="flex flex-col md:flex-row">
            <SidebarComponent />
            <Outlet />
            <ToastContainer position="top-center" autoClose={2000}/>
        </div>
    )
}

export default DashboardLayout
