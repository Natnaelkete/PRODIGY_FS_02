import "./sidebar.scss";

import { TbLogout2 } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { CgWorkAlt } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import useLogout from "../hooks/auth/useLogout";

function Sidebar() {
  const { logout } = useLogout();

  function handleLogout() {
    logout();
  }

  return (
    <div className="sidebar-wrapper">
      <ul>
        <li>
          <IoHomeOutline />
          <a href="#">Home</a>
        </li>
        <li>
          <CgWorkAlt />
          <a href="#employee">Employee</a>
        </li>
        <li>
          <IoSettingsOutline />
          <a href="#employee">Setting</a>
        </li>
      </ul>

      <div className="logout">
        <TbLogout2 onClick={handleLogout} style={{ cursor: "pointer" }} />
        <p>username</p>
      </div>
    </div>
  );
}

export default Sidebar;
