import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  Grid2X2,
  Package,
} from "lucide-react";

import "../../styles/globals.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo">DEALPORT</h2>

      <p className="menuTitle">Main Menu</p>

      <nav className="menu">
        <NavLink to="/" end>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/orders">
          <ShoppingCart size={20} />
          <span>Order Management</span>
        </NavLink>

        <NavLink to="/customers">
          <Users size={20} />
          <span>Customers</span>
        </NavLink>

        <NavLink to="/categories">
          <Grid2X2 size={20} />
          <span>Categories</span>
        </NavLink>

        <NavLink to="/products">
          <Package size={20} />
          <span>Products</span>
        </NavLink>
      </nav>

      <div className="shopCard">
        <div className="avatar">D</div>

        <div>
          <h4>Dealport Shop</h4>
          <p>Admin Panel</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;