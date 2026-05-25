import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { House } from "lucide-react";
import { FileUser } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("");

  return (
    <nav className="navbar flex justify-between items-center py-4 px-primary-padding sticky top-0 z-50 bg-black/5 backdrop-blur-sm shadow-lg shadow-black/30">
      <Link
        to="/"
        className={`all-icon bg-white text-black font-bold text-2xl px-4 py-4 rounded-full  ${activeItem !== "all" ? "shadow-lg shadow-black/50 active:shadow-none ease-in-out transition-all duration-500" : ""}`}
        onClick={() => setActiveItem("all")}
      >
        MS
      </Link>
      <div className="menu menu-barger">
        <div
          className={`bubble ${activeItem === "home" ? "home-bubble" : activeItem === "about" ? "about-bubble" : activeItem === "projects" ? "projects-bubble" : activeItem === "contact" ? ` contact-bubble` : activeItem === "all" ? "all-bubble" : "remove-bubble"}`}
        ></div>
        <Link
          className={`icons menu-item flex flex-col items-center ${activeItem === "home" ? "menu-item-home" : ""}`}
          onClick={() => setActiveItem("home")}
          to="/home"
        >
          <div className="icon">
            <House className="home-icon" />
          </div>
          <span className="link">Home</span>
        </Link>
        <Link
          className={`icons menu-item flex flex-col items-center ${activeItem === "about" ? "menu-item-about" : ""}`}
          onClick={() => setActiveItem("about")}
          to="/about"
        >
          <div className="icon">
            <FileUser />
          </div>
          <span className="link">About</span>
        </Link>
        <Link
          className={`icons menu-item flex flex-col items-center ${activeItem === "projects" ? "menu-item-projects" : ""}`}
          onClick={() => setActiveItem("projects")}
          to="/projects"
        >
          <div className="icon">
            <PanelsTopLeft />
          </div>
          <span className="link">Projects</span>
        </Link>
      </div>
      <Link
        to="/contact"
        className="contact-icon bg-white text-black hover:bg-black hover:text-white font-medium text-lg px-5 py-3 rounded-xl shadow-lg shadow-black/50 hover:shadow-black transition-all duration-300 active:scale-95 active:shadow-black/0"
        onClick={() => setActiveItem("contact")}
      >
        <span className="link">Contact</span>
      </Link>
    </nav>
  );
};

export default Navbar;
