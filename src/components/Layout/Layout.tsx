// components
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

import LayoutContextProvider from "../../contexts/LayoutContext";

const Layout = () => {

    return (
       <LayoutContextProvider>
        <Header />
        <Sidebar />
        <Outlet />
       </LayoutContextProvider> 
    )
}

export default Layout;