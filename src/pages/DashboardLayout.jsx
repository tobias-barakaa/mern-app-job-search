import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, Navbar, SmallSidebar } from "../components";
import Admin from "./Admin";

const DashboardContext = createContext();



const DashboardLayout = ({isDarkThemeEnabled}) => {
 
  const user = { name: "tobby" };

  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('dark-theme', newDarkTheme);
    
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