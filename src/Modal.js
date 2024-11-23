import React from "react";

const Modal = ({ isOpen, closeModal, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-3/4 md:w-1/2 max-h-[80vh] overflow-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {project.name}
        </h2>

        {/* Exibindo a descrição longa com a formatação original */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Descrição</h3>
          <p className="text-gray-600 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Funcionalidades principais */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Funcionalidades principais
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            {project.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Diferenciais técnicos */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Diferenciais técnicos
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            {project.technicalDifferentials?.map((differential, index) => (
              <li key={index}>{differential}</li>
            ))}
          </ul>
        </div>

        {/* Links para o projeto e GitHub */}
        <div className="mt-4 space-x-4">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Acessar o Projeto
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Ver no GitHub
          </a>
        </div>

        {/* Botão de Fechar */}
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-6"
          onClick={closeModal}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Modal;
