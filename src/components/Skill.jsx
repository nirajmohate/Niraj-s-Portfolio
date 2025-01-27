import React from "react";

const Skill = () => {
  return (
    <>
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-center text-3xl font-bold">My Skills</h1>
      </header>

      <main className="container mx-auto my-8 p-4">
        <section className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            What I Bring to the Table
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            I am a skilled MERN Stack developer proficient in building modern,
            responsive, and dynamic web applications. Here are the technologies
            and tools I excel at:
          </p>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons/icons/html5.svg"
              alt="HTML"
              className="w-16 h-16 mx-auto mb-2"
            />
            <h3 className="font-semibold text-xl">HTML</h3>
            <p className="text-gray-600 text-sm">
              Semantic, accessible web structures
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons/icons/css3.svg"
              alt="CSS"
              className="w-16 h-16 mx-auto mb-2"
            />
            <h3 className="font-semibold text-xl">CSS</h3>
            <p className="text-gray-600 text-sm">Responsive, modern styling</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons/icons/javascript.svg"
              alt="JavaScript"
              className="w-16 h-16 mx-auto mb-2"
            />
            <h3 className="font-semibold text-xl">JavaScript</h3>
            <p className="text-gray-600 text-sm">Interactive functionality</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons/icons/react.svg"
              alt="React"
              className="w-16 h-16 mx-auto mb-2"
            />
            <h3 className="font-semibold text-xl">React</h3>
            <p className="text-gray-600 text-sm">Dynamic, single-page apps</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons/icons/tailwindcss.svg"
              alt="Tailwind CSS"
              className="w-16 h-16 mx-auto mb-2"
            />
            <h3 className="font-semibold text-xl">Tailwind CSS</h3>
            <p className="text-gray-600 text-sm">Utility-first styling</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons/icons/node-dot-js.svg"
              alt="Node.js"
              className="w-16 h-16 mx-auto mb-2"
            />
            <h3 className="font-semibold text-xl">Node.js</h3>
            <p className="text-gray-600 text-sm">Backend development</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons/icons/express.svg"
              alt="Express"
              className="w-16 h-16 mx-auto mb-2"
            />
            <h3 className="font-semibold text-xl">Express.js</h3>
            <p className="text-gray-600 text-sm">Backend frameworks</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons/icons/mongodb.svg"
              alt="MongoDB"
              className="w-16 h-16 mx-auto mb-2"
            />
            <h3 className="font-semibold text-xl">MongoDB</h3>
            <p className="text-gray-600 text-sm">Database management</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons/icons/git.svg"
              alt="Git"
              className="w-16 h-16 mx-auto mb-2"
            />
            <h3 className="font-semibold text-xl">Git</h3>
            <p className="text-gray-600 text-sm">Version control</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons/icons/github.svg"
              alt="GitHub"
              className="w-16 h-16 mx-auto mb-2"
            />
            <h3 className="font-semibold text-xl">GitHub</h3>
            <p className="text-gray-600 text-sm">Code collaboration</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons/icons/bootstrap.svg"
              alt="Bootstrap"
              className="w-16 h-16 mx-auto mb-2"
            />
            <h3 className="font-semibold text-xl">Bootstrap</h3>
            <p className="text-gray-600 text-sm">Responsive UI design</p>
          </div>
        </section>
      </main>

      <footer className="text-center bg-gray-800 text-white p-4">
        <p>&copy; 2025 Niraj Mohate. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Skill;
