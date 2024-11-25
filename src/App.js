import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaBars } from "react-icons/fa";
import data from "./data.json";
import Modal from "./Modal";
import TechnologyBadge from "./TechnologyBadge";
import "./index.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 fixed top-0 w-full shadow-lg z-10">
        <div className="container mx-auto flex justify-between items-center px-6">
          <button onClick={toggleMenu} className="text-white text-3xl">
            <FaBars />
          </button>
          <h1 className="text-2xl font-bold tracking-wide">
            Victor Gabriel | Desenvolvedor Full Stack
          </h1>
        </div>
      </header>

      {/* Menu Lateral */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white transition-transform ${
          isMenuOpen ? "transform-none z-20" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-2xl text-white">
            X
          </button>
        </div>
        <nav className="mt-10 px-6">
          <a
            href="#about"
            className="block py-2 px-4 text-xl hover:bg-blue-700 rounded-md"
            onClick={toggleMenu}
          >
            Sobre Mim
          </a>
          <a
            href="#projects"
            className="block py-2 px-4 text-xl hover:bg-purple-700 rounded-md"
            onClick={toggleMenu}
          >
            Projetos
          </a>
          <a
            href="#contact"
            className="block py-2 px-4 text-xl hover:bg-gray-700 rounded-md"
            onClick={toggleMenu}
          >
            Contato
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <main className="pt-20 px-6">
        {/* About Section */}
        <section id="about" className="container mx-auto my-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
            Sobre Mim
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg text-center max-w-3xl mx-auto">
            Sou o Victor Gabriel, desenvolvedor full stack dedicado a
            transformar ideias em soluções digitais inovadoras. Minha expertise
            abrange tecnologias modernas como Python, Java, JavaScript, Spring
            Boot e React, com foco em criar aplicações robustas e experiências
            que encantam os usuários. Tenho um interesse especial por
            inteligência artificial, automação e música, buscando sempre unir
            eficiência e criatividade. Estou comprometido em evoluir
            continuamente, tanto como profissional quanto como pessoa.
          </p>
        </section>

        {/* Projects Section */}
        <div id="projects" className="container mx-auto my-12 px-6">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
            Meus Projetos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer"
                onClick={() => openModal(project)}
              >
                <img
                  src={project.image}
                  alt={`Screenshot do projeto ${project.name}`}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-blue-600 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600">{project.shortDescription}</p>

                {/* Exibindo as tecnologias como badges */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology, index) => (
                    <TechnologyBadge key={index} technology={technology} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto my-12 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            Contato
          </h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/victor-gabriel-vianna-307776309/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-4xl transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/vgvianna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-black text-4xl transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/vg.vianna/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-b from-[#7C22B8] via-[#C42F63] to-[#DE963E] text-transparent bg-clip-text hover:from-[#621B98] hover:via-[#A02852] hover:to-[#C57E1A] text-4xl transition"
            >
              <FaInstagram />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 py-6 text-center">
        <p>&copy; 2024 Victor Gabriel. Todos os direitos reservados.</p>
      </footer>

      {/* Modal */}
      {selectedProject && (
        <Modal
          isOpen={isModalOpen}
          closeModal={closeModal}
          project={selectedProject}
        />
      )}
    </div>
  );
}

export default App;
