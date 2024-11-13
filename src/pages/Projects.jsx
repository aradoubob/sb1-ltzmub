import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'CASA DE COLT 1',
    image: '/images/01.jpg',
    rooms: 3,
    surface: '111 mp',
  },
  {
    id: 2,
    title: 'CASA DE COLT 2',
    image: '/images/02.jpg',
    rooms: 3,
    surface: '111,3 mp',
  },
  {
    id: 3,
    title: 'CASE DIN MIJLOC',
    image: '/images/03.jpg',
    rooms: 3,
    surface: '118,7 mp',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-goldenrod">CARTIER NEW BRIDGE</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-black rounded-lg shadow-lg overflow-hidden border border-goldenrod">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-goldenrod">{project.title}</h2>
                <p className="text-white">Suprafata utila: {project.surface}</p>
                <p className="text-white mb-4">Camere: {project.rooms}</p>
                <Link 
                  to={`/properties/${project.id}`}
                  className="inline-block bg-black text-goldenrod border-2 border-goldenrod px-6 py-2 rounded-lg hover:bg-goldenrod hover:text-black transition-colors"
                >
                  Vezi detalii
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}