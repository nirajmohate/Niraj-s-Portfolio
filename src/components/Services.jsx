import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="text-lg mt-2">
            Explore the wide range of services we offer in web development and
            more
          </p>
        </div>
      </header>

      {/* Services Section  */}
      <main className="container mx-auto my-12 p-4">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card  */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3199/3199867.png"
              alt="E-commerce Development"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">
              E-commerce Development
            </h2>
            <p className="text-gray-600 text-sm">
              We build feature-rich online stores with secure payment gateways,
              responsive designs, and easy navigation for seamless shopping
              experiences.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="MERN Stack Development"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">
              MERN Stack Development
            </h2>
            <p className="text-gray-600 text-sm">
              Full-stack web development using MongoDB, Express, React, and
              Node.js to create dynamic and scalable applications tailored to
              your needs.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3081/3081931.png"
              alt="Custom Web Applications"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">
              Custom Web Applications
            </h2>
            <p className="text-gray-600 text-sm">
              We design and develop personalized web applications with unique
              features to match your business requirements.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3059/3059984.png"
              alt="API Development"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">API Development</h2>
            <p className="text-gray-600 text-sm">
              Secure and efficient API development to integrate your systems and
              enable seamless communication between platforms.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3659/3659685.png"
              alt="UI/UX Design"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">UI/UX Design</h2>
            <p className="text-gray-600 text-sm">
              Creating visually appealing and user-friendly interfaces that
              enhance customer engagement and satisfaction.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3153/3153930.png"
              alt="Maintenance & Support"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">
              Maintenance & Support
            </h2>
            <p className="text-gray-600 text-sm">
              We provide ongoing support and maintenance to ensure your website
              runs smoothly and stays up-to-date with the latest trends.
            </p>
          </div>
        </section>
      </main>

      {/* Call-to-Action Section  */}
      <section className="bg-blue-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to bring your ideas to life?
          </h2>
          <p className="text-lg mb-6">
            Contact us today to discuss your project requirements and get
            started!
          </p>
          <a
            href=""
            className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {" "}
            <Link
              to="/Contact"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Get in Touch
            </Link>{" "}
          </a>
        </div>
      </section>

      {/* Footer  */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-8">
        <p>&copy; 2025 Niraj Mohate. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Services;
