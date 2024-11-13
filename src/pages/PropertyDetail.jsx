import React from 'react';
import { useParams } from 'react-router-dom';
import Image from '../components/Image';

const properties = {
  1: {
    title: 'CASA DE COLT 1',
    surface: '111 mp',
    rooms: 3,
    description: 'Această casă de colț oferă un spațiu de viață modern și elegant, perfect pentru o familie. Cu o arhitectură contemporană și finisaje de înaltă calitate, această proprietate combină confortul cu stilul.',
    features: [
      'Living spațios cu ferestre mari',
      'Bucătărie modernă complet utilată',
      'Dormitor matrimonial cu dressing',
      'Două dormitoare secundare luminoase',
      'Două băi complete',
      'Grădină privată amenajată',
      'Parcare proprie',
      'Sistem de încălzire în pardoseală',
      'Izolație termică premium'
    ],
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600573472591-ee6981cf35b6?w=800&auto=format&fit=crop'
    ]
  },
  2: {
    title: 'CASA DE COLT 2',
    surface: '111,3 mp',
    rooms: 3,
    description: 'O casă de colț cu design modern și spații generoase, ideală pentru cei care apreciază arhitectura contemporană și confortul. Fiecare detaliu a fost atent planificat pentru a crea un mediu de viață perfect.',
    features: [
      'Living open space cu zonă de dining',
      'Bucătărie cu insulă centrală',
      'Dormitor principal cu baie proprie',
      'Două dormitoare spațioase',
      'Două băi moderne',
      'Terasă mare cu vedere spre grădină',
      'Grădină amenajată peisagistic',
      'Sistem smart home integrat',
      'Finisaje premium în toate încăperile'
    ],
    images: [
      'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop'
    ]
  },
  3: {
    title: 'CASE DIN MIJLOC',
    surface: '118,7 mp',
    rooms: 3,
    description: 'Această casă din mijlocul complexului oferă un echilibru perfect între spațiu și funcționalitate. Cu o planificare inteligentă și finisaje de calitate, reprezintă alegerea ideală pentru o familie modernă.',
    features: [
      'Living și dining cu spațiu deschis',
      'Bucătărie ergonomică și modernă',
      'Dormitor principal generos',
      'Două dormitoare secundare',
      'Două băi și un grup sanitar',
      'Spațiu verde privat',
      'Parcare dedicată',
      'Sistem de ventilație cu recuperare de căldură',
      'Ferestre triple cu izolare fonică'
    ],
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&auto=format&fit=crop'
    ]
  }
};

export default function PropertyDetail() {
  const { id } = useParams();
  const property = properties[id];

  if (!property) {
    return (
      <div className="min-h-screen bg-black py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-goldenrod">Proprietate negăsită</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-goldenrod">{property.title}</h1>
        
        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {property.images.map((image, index) => (
            <div key={index} className="relative h-64 md:h-80">
              <Image
                src={image}
                alt={`${property.title} - Imagine ${index + 1}`}
                className="w-full h-full object-cover rounded-lg border border-goldenrod"
              />
            </div>
          ))}
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black p-6 rounded-lg border border-goldenrod">
            <h2 className="text-2xl font-bold mb-4 text-goldenrod">Detalii Proprietate</h2>
            <p className="text-white mb-4">Suprafață utilă: {property.surface}</p>
            <p className="text-white mb-4">Număr camere: {property.rooms}</p>
            <p className="text-white mb-4">{property.description}</p>
          </div>

          <div className="bg-black p-6 rounded-lg border border-goldenrod">
            <h2 className="text-2xl font-bold mb-4 text-goldenrod">Facilități și Dotări</h2>
            <ul className="text-white space-y-2">
              {property.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-goldenrod mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-goldenrod">Interesat de această proprietate?</h2>
          <p className="text-white mb-6">Contactați agentul nostru pentru mai multe detalii și programarea unei vizionări</p>
          <div className="space-y-2">
            <p className="text-goldenrod">IMMO SHELBY</p>
            <a href="tel:0786322385" className="text-white hover:text-goldenrod transition-colors">
              0786 322 385
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}