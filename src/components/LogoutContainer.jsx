import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/LogoutContainer';
import { useDashboardContext } from '../pages/DashboardLayout';
import { FaUserCircle, FaCaretDown  } from 'react-icons/fa';

const LogoutContainer = () => {
    const [showLogout, setShowLogout] = useState(false)
    const {user, logoutUser} = useDashboardContext();

    return (
    <Wrapper>
        <button className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
        >
            <FaUserCircle />
            <span>{user?.name}</span>
            <FaCaretDown />
        </button>
        <div className={showLogout ?
        'show-dropdown': 'dropdown'}>
            <button className="btn logout-btn"
            onClick={logoutUser}
            >
                Logout
            </button>
        </div>
      
    </Wrapper>
  )
}

export default LogoutContainer
