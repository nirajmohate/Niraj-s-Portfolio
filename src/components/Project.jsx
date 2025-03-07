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
              src="\public\gemini clone.png"
              alt="Gemini App Clone"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h2 class="text-xl font-bold mb-2">Gemini App Clone</h2>
              <p class="text-gray-600 text-sm mb-4">
                A clone of the Gemini app built with modern web technologies.
              </p>
              <a
                href="https://gemini-clone-7lro.vercel.app/"
                target="_blank"
                class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
              >
                View Project
              </a>
            </div>
          </div>

          <div class="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src="\public\animated cricket.png"
              alt="Animated Cricket Web"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h2 class="text-xl font-bold mb-2">Animated Cricket Web</h2>
              <p class="text-gray-600 text-sm mb-4">
                A dynamic animated cricket website for sports lovers.
              </p>
              <a
                href="https://animated-cricket-website.vercel.app/"
                target="_blank"
                class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
              >
                View Project
              </a>
            </div>
          </div>

          <div class="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src="\public\chat app.png"
              alt="Real-Time Chat App"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h2 class="text-xl font-bold mb-2">Real-Time Chat App</h2>
              <p class="text-gray-600 text-sm mb-4">
                A real-time chat application with instant messaging.
              </p>
              <a
                href="https://real-time-chat-app-6y6v.vercel.app/"
                target="_blank"
                class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
              >
                View Project
              </a>
            </div>
          </div>

          <div class="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src="\public\code reviewer.png"
              alt="Code Reviewer"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h2 class="text-xl font-bold mb-2">Code Reviewer</h2>
              <p class="text-gray-600 text-sm mb-4">
                A tool to review and check code for best practices.
              </p>
              <a
                href="https://code-checker-delta.vercel.app/"
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
