import React from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";

function ProjectDetails() {
  const { projectId } = useParams(); // Obtém o ID do projeto da URL
  const project = data.projects[projectId]; // Encontra o projeto com base no ID

  return (
    <div className="container mx-auto my-12 px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{project.name}</h1>
      <img
        src={project.image}
        alt={`Screenshot do projeto ${project.name}`}
        className="rounded-lg mb-6"
      />

      <p className="text-gray-800 text-lg mb-4">
        <strong>Descrição:</strong>
      </p>
      <p className="text-gray-600 leading-relaxed mb-6">
        {project.longDescription}
      </p>

      {project.features && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Funcionalidades principais:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {project.technicalDifferentials && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Diferenciais técnicos:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            {project.technicalDifferentials.map((differential, index) => (
              <li key={index}>{differential}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Acessar o Projeto
        </a>
      </div>
      <div className="mt-2">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Ver no GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectDetails;
