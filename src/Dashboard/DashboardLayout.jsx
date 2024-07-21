import { Outlet } from "react-router-dom"

import SidebarComponent from "./Sidebar"


function DashboardLayout() {
    return (
        <div className="flex flex-col md:flex-row">
            <SidebarComponent />
            <Outlet />
        </div>
    )
}

export default DashboardLayout
