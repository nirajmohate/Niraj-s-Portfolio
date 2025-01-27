import React from "react";

const About = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-lg mt-2">
            Learn more about my journey, education, and aspirations as a
            developer.
          </p>
        </div>
      </header>

      {/* About Section  */}
      <main className="container mx-auto my-12 p-4">
        <section className="bg-white shadow-md rounded-lg p-6">
          {/* Personal Introduction  */}
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Hi, I'm Niraj!
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            I’m a passionate and dedicated web developer currently pursuing my
            Bachelor of Computer Applications (BCA). I specialize in MERN stack
            development and love crafting innovative solutions to real-world
            problems through technology.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            With a strong foundation in HTML, CSS, JavaScript, and frameworks
            like React and Node.js, I aim to build seamless, efficient, and
            user-friendly applications. My goal is to keep learning and
            contributing to the tech community.
          </p>
        </section>

        {/* Education Section  */}
        <section className="bg-gray-50 shadow-md rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Education</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="font-semibold text-lg">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p>
              SMBST College Sangamner |{" "}
                <span className="text-blue-600">2022 – 2025 (Expected)</span>
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-lg">className 12 (Commerce)</h3>
              <p>
                SMBST College Sangamner | <span className="text-blue-600">2021</span> |{" "}
                <span className="text-gray-600">47%</span>
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-lg">className 10</h3>
              <p>
                MRD Malpani School | <span className="text-blue-600">2019</span> |{" "}
                <span className="text-gray-600">75%</span>
              </p>
            </li>
          </ul>
        </section>

        {/* Skills Section  */}
        <section className="bg-white shadow-md rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">My Skills</h2>
          <p className="text-gray-700 text-lg mb-4">
            I have hands-on experience with the following technologies and
            tools:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <span className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg font-medium text-center">
              HTML
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg font-medium text-center">
              CSS
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg font-medium text-center">
              JavaScript
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg font-medium text-center">
              React
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg font-medium text-center">
              Tailwind
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg font-medium text-center">
              Node.js
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg font-medium text-center">
              Express
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg font-medium text-center">
              MongoDB
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg font-medium text-center">
              Git
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg font-medium text-center">
              GitHub
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg font-medium text-center">
              EJS
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg font-medium text-center">
              REST APIs
            </span>
          </div>
        </section>

        {/* Goals Section  */}
        <section className="bg-gray-50 shadow-md rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Goals & Aspirations
          </h2>
          <p className="text-gray-700 text-lg">
            My ultimate goal is to become a full-stack developer and contribute
            to building scalable, secure, and impactful applications. I’m always
            eager to learn new technologies and collaborate on meaningful
            projects.
          </p>
        </section>
      </main>

      {/* Footer  */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2025 Niraj Mohate. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default About;
