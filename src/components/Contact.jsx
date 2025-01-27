import React from "react";

const Contact = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Contact Me</h1>
          <p className="text-lg mt-2">
            Feel free to reach out via phone, email, or social profiles!
          </p>
        </div>
      </header>

      {/* Contact Section */}
      <main className="container mx-auto my-12 p-4">
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">
            Get in Touch
          </h2>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-blue-600 text-xl mr-4">📞</span>
              <p className="text-lg">
                Phone:{" "}
                <a
                  href="tel:+917820846208"
                  className="text-blue-600 font-semibold"
                >
                  +91 7820846208
                </a>
              </p>
            </div>

            <div className="flex items-center">
              <span className="text-blue-600 text-xl mr-4">✉️</span>
              <p className="text-lg">
                E-Mail:{" "}
                <a
                  href="mailto:nirajmohate@gmail.com"
                  className="text-blue-600 font-semibold"
                >
                  nirajmohate@gmail.com
                </a>
              </p>
            </div>

            <div className="flex items-center">
              <span className="text-blue-600 text-xl mr-4">🔗</span>
              <p className="text-lg">
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/nirajmohate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold"
                >
                  View Profile
                </a>
              </p>
            </div>

            <div className="flex items-center">
              <span className="text-blue-600 text-xl mr-4">🌟</span>
              <p className="text-lg">
                GitHub:{" "}
                <a
                  href="https://github.com/nirajmohate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold"
                >
                  View Profile
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-8">
           {/* <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Send Me a Message
            </h3>
             <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 transition duration-300 font-bold"
              >
                Send Message
              </button>
            </form>  */}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2025 Niraj Mohate. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Contact;
