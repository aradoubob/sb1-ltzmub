import React from 'react';

export default function Partners() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-goldenrod">Partenerii Noștri</h1>
        <div className="max-w-3xl mx-auto">
          <div className="bg-black rounded-lg shadow-lg p-6 mb-6 border border-goldenrod">
            <h2 className="text-2xl font-bold mb-4 text-goldenrod">Tâmplar</h2>
            <p className="text-white mb-4">Partener de încredere pentru lucrări de tâmplărie</p>
            <a 
              href="https://axe-m.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-goldenrod hover:text-white transition-colors"
            >
              Vizitează website-ul
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}