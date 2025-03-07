import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Navbar */}

      <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h2 className="text-2xl font-bold text-blue-600">Niraj Mohate</h2>
          <div className="hidden md:flex space-x-6">
            {/* <Link to="/">Home</Link> */}
            <a href="">
              {" "}
              <Link
                to="/About"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                About
              </Link>{" "}
            </a>

            <a href="">
              {" "}
              <Link
                to="/Contact"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Contact
              </Link>{" "}
            </a>

            <a href="">
              {" "}
              <Link
                to="/Skill"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Skill
              </Link>{" "}
            </a>

            <a href="">
              {" "}
              <Link
                to="/Services"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Services
              </Link>{" "}
            </a>

            <a href="">
              {" "}
              <Link
                to="/Project"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Project
              </Link>{" "}
            </a>
          </div>
          <button
            onClick={toggleSidebar}
            id="menu-btn"
            className="md:hidden text-blue-600 text-2xl"
          >
            ☰
          </button>
        </div>
      </nav>
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        {/* Close Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-2xl text-white"
        >
          ✕
        </button>

        <ul className="flex flex-col space-y-6 mt-16 p-6">
          <li>
            <Link
              to="/"
              className="block text-gray-300 hover:text-white"
              onClick={toggleSidebar}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block text-gray-300 hover:text-white"
              onClick={toggleSidebar}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block text-gray-300 hover:text-white"
              onClick={toggleSidebar}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/skill"
              className="block text-gray-300 hover:text-white"
              onClick={toggleSidebar}
            >
              Skill
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="block text-gray-300 hover:text-white"
              onClick={toggleSidebar}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/project"
              className="block text-gray-300 hover:text-white"
              onClick={toggleSidebar}
            >
              Project
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Section */}
      <header
        id="main"
        className="container mx-auto flex flex-col md:flex-row items-center px-4 py-16"
      >
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
            MERN Stack Developer <br />
            for Your Dream Website!
          </h1>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            A motivated and skilled Full-Stack Developer with expertise in HTML,
            CSS, JavaScript, React, Tailwind CSS, Node.js, Express, and MongoDB.
            Proven experience in creating dynamic web applications like an{" "}
            <span className="font-semibold text-blue-600">Code Reviewer</span>{" "}
            and{" "}
            <span className="font-semibold text-blue-600">
              Real Time Chat App
            </span>
            . Currently pursuing a{" "}
            <span className="font-semibold text-blue-600">
              Bachelor’s degree in Computer Applications (BCA)
            </span>
            , graduating in 2025.
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <a
              href="mailto:nirajmohate@gmail.com"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300 font-semibold"
            >
              Hire Me
            </a>

            <a
              href="/Niraj_Mohate_Resume.pdf"
              download="Niraj_Mohate_Resume.pdf"
              className="bg-gray-100 text-blue-600 px-6 py-3 rounded-lg shadow-lg border border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 font-semibold"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img
            src="./Profile2.jpg"
            alt="Profile"
            className="w-96 h-96 mx-auto rounded-full shadow-lg border-4 border-blue-600 object-cover"
            style={{ objectPosition: "top" }}
          />
        </div>
      </header>

      {/* Footer */}
      <footer id="footer" className="bg-blue-600 text-white text-center py-4">
        <p className="text-sm">
          &copy; 2025 Niraj Mohate. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
