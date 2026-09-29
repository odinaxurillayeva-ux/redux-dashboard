import { Outlet } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import "./styles/globals.css";

export default function App() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Header />

        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}