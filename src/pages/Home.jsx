import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../components/Image';

const projects = [
  {
    id: 1,
    title: 'CASA DE COLT 1',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop',
    rooms: 3,
    surface: '111 mp',
    features: [
      'Living spațios',
      'Bucătărie modernă',
      'Grădină privată',
      'Parcare'
    ]
  },
  {
    id: 2,
    title: 'CASA DE COLT 2',
    image: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800&auto=format&fit=crop',
    rooms: 3,
    surface: '111,3 mp',
    features: [
      'Design modern',
      'Terasă mare',
      'Grădină amenajată',
      'Loc de parcare'
    ]
  },
  {
    id: 3,
    title: 'CASE DIN MIJLOC',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&auto=format&fit=crop',
    rooms: 3,
    surface: '118,7 mp',
    features: [
      'Poziție excelentă',
      'Spațiu verde',
      'Finisaje premium',
      'Parcare inclusă'
    ]
  }
];

export default function Home() {
  return (
    <div className="page-container min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop")',
          filter: 'brightness(0.3)'
        }}
      />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-goldenrod mb-8">
            Bine ați venit în noul cartier din Aradul Nou:
            <span className="block text-goldenrod mt-2">
              CARTIER NEW BRIDGE!
            </span>
          </h2>
          
          <div className="bg-black bg-opacity-60 p-8 rounded-lg shadow-lg border border-goldenrod">
            <p className="text-xl text-white leading-relaxed">
              Cartierul "New Bridge" - un loc de excepție creat pentru tine!
              <br /><br />
              Bucură-te de un stil de viață exclusivist, într-o comunitate modernă, unde confortul și natura se îmbină perfect. Alege să trăiești într-o casă construită cu grijă, calitate și eleganță la "New Bridge".
            </p>
          </div>
          
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-goldenrod">
              AGENT DE VANZARI: IMMO SHELBY - TEL: 0786 322 385
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-black bg-opacity-60 rounded-lg shadow-lg overflow-hidden border border-goldenrod transform hover:scale-105 transition-transform duration-300">
              <div className="relative h-64">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-goldenrod">{project.title}</h2>
                <p className="text-white">Suprafata utila: {project.surface}</p>
                <p className="text-white mb-4">Camere: {project.rooms}</p>
                <div className="mb-4">
                  <h3 className="text-goldenrod font-semibold mb-2">Facilități:</h3>
                  <ul className="text-white">
                    {project.features.map((feature, index) => (
                      <li key={index} className="mb-1">• {feature}</li>
                    ))}
                  </ul>
                </div>
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