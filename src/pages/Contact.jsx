import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-goldenrod">Contact</h1>
          
          <div className="bg-black rounded-lg shadow-lg p-8 border border-goldenrod">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-goldenrod">Claire Immobiliare</h2>
              <p className="text-white">Strada 602 N°32</p>
              <p className="text-white">317235 Pecica, Jud Arad</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2 text-goldenrod">Telefon:</h3>
              <a href="tel:0786256027" className="text-white hover:text-goldenrod transition-colors block">0786 256 027</a>
              <a href="tel:0786048044" className="text-white hover:text-goldenrod transition-colors block">0786 048 044</a>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2 text-goldenrod">Agent de vânzări:</h3>
              <p className="text-white">IMMO SHELBY</p>
              <a href="tel:0786322385" className="text-white hover:text-goldenrod transition-colors">0786 322 385</a>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2 text-goldenrod">Social Media:</h3>
              <a 
                href="https://www.facebook.com/claireimmobiliare/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-goldenrod transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}