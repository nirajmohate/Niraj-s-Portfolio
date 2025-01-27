import React from "react";

const Project = () => {
  return (
    <>
      <header class="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-6">
        <div class="container mx-auto text-center">
          <h1 class="text-4xl font-bold">My Projects</h1>
          <p class="text-lg mt-2">
            Explore some of the amazing projects I've built using the MERN stack
            and other technologies.
          </p>
        </div>
      </header>

      {/* Projects Section  */}
      <main class="container mx-auto my-12 p-4">
        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card  */}
          <div class="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src="https://via.placeholder.com/400x200"
              alt="E-commerce Website"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h2 class="text-xl font-bold mb-2">E-commerce Website</h2>
              <p class="text-gray-600 text-sm mb-4">
                A fully responsive e-commerce website with features like product
                listings, cart management, and secure checkout. Built using
                React, Tailwind, and Node.js.
              </p>
              <a
                href="https://nirajmohate.github.io/Ecommerce-Website/"
                target="_blank"
                class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Add More Project Cards  */}
          <div class="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Color Palette Generator"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h2 class="text-xl font-bold mb-2">Color Palette Generator</h2>
              <p class="text-gray-600 text-sm mb-4">
                A tool to generate and explore color palettes for your design
                projects. Built with JavaScript, HTML, and CSS.
              </p>
              <a
                href="https://nirajmohate.github.io/color-palette-generator/"
                target="_blank"
                class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
              >
                View Project
              </a>
            </div>
          </div>

          <div class="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Notes App"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h2 class="text-xl font-bold mb-2">Notes App</h2>
              <p class="text-gray-600 text-sm mb-4">
                A simple yet efficient app to create and manage your notes.
                Built with JavaScript, HTML, and CSS.
              </p>
              <a
                href="https://nirajmohate.github.io/Notes-App/"
                target="_blank"
                class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
              >
                View Project
              </a>
            </div>
          </div>

          <div class="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Password Strength Checker"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h2 class="text-xl font-bold mb-2">Password Strength Checker</h2>
              <p class="text-gray-600 text-sm mb-4">
                A handy tool to check the strength of your passwords and suggest
                improvements. Built with JavaScript, HTML, and CSS.
              </p>
              <a
                href="https://nirajmohate.github.io/pass-strength-checker/"
                target="_blank"
                class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
              >
                View Project
              </a>
            </div>
          </div>

          <div class="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Memory Card Game"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h2 class="text-xl font-bold mb-2">Memory Card Game</h2>
              <p class="text-gray-600 text-sm mb-4">
                A fun and interactive card-matching game to test your memory.
                Built with JavaScript, HTML, and CSS.
              </p>
              <a
                href="https://nirajmohate.github.io/memory-card-game/"
                target="_blank"
                class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
              >
                View Project
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer  */}
      <footer class="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2025 Niraj Mohate. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Project;
