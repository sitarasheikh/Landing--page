import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <header className="p-5 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Sitara Ishtiaq</h1>
        <nav>
          <ul className="flex space-x-5">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <main className="flex flex-col items-center justify-center mt-10">
        <section className="text-center">
          <h2 className="text-5xl font-bold mb-4">Front-end Developer</h2>
          <p className="text-xl mb-8">Creating stunning and responsive web applications with React and Tailwind CSS.</p>
          <a href="#projects" className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg hover:bg-purple-700 hover:text-white transition">
            View Projects
          </a>
        </section>
        
        <section id="about" className="mt-20">
          <h2 className="text-4xl font-bold text-center">About Me</h2>
          <p className="text-xl mt-4 max-w-3xl mx-auto text-center">
            I am a passionate Front-end Developer with experience in building modern web applications using Next.js, React, and Tailwind CSS. I love to create visually appealing and user-friendly websites.
          </p>
        </section>
        
        <section id="projects" className="mt-20">
          <h2 className="text-4xl font-bold text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div className="bg-white text-purple-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">Project 1</h3>
              <p className="mt-2">A beautiful project that showcases modern UI/UX design using React.</p>
            </div>
            <div className="bg-white text-purple-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">Project 2</h3>
              <p className="mt-2">A responsive web application built with Next.js and Tailwind CSS.</p>
            </div>
          </div>
        </section>
        
        <section id="contact" className="mt-20">
          <h2 className="text-4xl font-bold text-center">Contact</h2>
          <p className="text-xl mt-4 text-center">Lets work together on your next project!</p>
          <div className="mt-6 flex justify-center">
            <a href="mailto:sitara_sheikh@hotmail.com" className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg hover:bg-purple-700 hover:text-white transition">
              Email Me
            </a>
          </div>
        </section>
      </main>
      
      <footer className="mt-20 p-5 text-center">
      <p> 2024 Sitara Ishtiaq. All rights reserved.&apos;</p>

      </footer>
    </div>
  );
};

export default Home;
