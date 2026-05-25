import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Hero from "../pages/Hero";
import About from "../pages/About";
import ProjectDetails from "../pages/ProjectDetails";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<ProjectDetails />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
