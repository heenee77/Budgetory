// components
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

import LayoutContextProvider from "../../contexts/LayoutContext";

const Layout = () => {

    return (
       <LayoutContextProvider>
        <Header />
        <Sidebar />
       </LayoutContextProvider> 
    )
}

export default Layout;