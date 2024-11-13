import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../components/Image';

const properties = [
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
    ],
    price: 'La cerere'
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
    ],
    price: 'La cerere'
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
    ],
    price: 'La cerere'
  }
];

export default function Properties() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-goldenrod">Proprietăți de vânzare</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-black rounded-lg shadow-lg overflow-hidden border border-goldenrod transform hover:scale-105 transition-transform duration-300">
              <div className="relative h-64">
                <Image 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-0 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-goldenrod">{property.title}</h2>
                <p className="text-white">Suprafata utila: {property.surface}</p>
                <p className="text-white">Camere: {property.rooms}</p>
                <p className="text-white mb-4">Preț: {property.price}</p>
                <div className="mb-4">
                  <h3 className="text-goldenrod font-semibold mb-2">Facilități:</h3>
                  <ul className="text-white">
                    {property.features.map((feature, index) => (
                      <li key={index} className="mb-1">• {feature}</li>
                    ))}
                  </ul>
                </div>
                <Link 
                  to={`/properties/${property.id}`}
                  className="inline-block bg-black text-goldenrod border-2 border-goldenrod px-6 py-2 rounded-lg hover:bg-goldenrod hover:text-black transition-colors"
                >
                  Mai multe detalii
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}