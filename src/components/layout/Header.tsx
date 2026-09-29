import { Search, Bell, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../../styles/header.css";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="headerLeft">
        <h2>Dashboard</h2>
        <p>Welcome back, Dealport Shop 👋</p>
      </div>

      <div className="headerRight">
        <div className="searchBox">
          <Search size={18} />
          <input type="text" placeholder="Search here..." />
        </div>

        <button className="iconBtn">
          <Bell size={20} />
        </button>

        <button className="iconBtn">
          <Settings size={20} />
        </button>

        <div className="profile">
          <div className="profileAvatar">D</div>

          <div>
            <h4>Dealport Shop</h4>
            <span>Admin</span>
          </div>
        </div>

        {/* Logout tugmasi */}
        <button className="logoutBtn" onClick={handleLogout}>
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </header>
  );
}