import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, Navbar, SmallSidebar } from "../components";
import Admin from "./Admin";

const DashboardContext = createContext();

const DashboardLayout = () => {
 
  const user = { name: "tobby" };

  const [showSidebar, setShowSidebar] = useState();
  const [isDarkTheme, setIsDarkTheme] = useState();

  const toggleDarkTheme = () => {
    console.log("yes am not working t the moment")
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
   console.log("yes I will be working shortly") 
  };

  return (
    <DashboardContext.Provider
      value={{ user, showSidebar,toggleSidebar, isDarkTheme, toggleDarkTheme, logoutUser }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext)
export default DashboardLayout;

// import { Outlet } from "react-router-dom";
// import Wrapper from "../assets/wrappers/Dashboard";

// const DashboardLayout = () => {
//   return (
//     <div>
//       <Outlet />
//     </div>
//   );
// };

// export default DashboardLayout;