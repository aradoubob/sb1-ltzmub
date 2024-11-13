import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-goldenrod py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Claire Immobiliare. Toate drepturile rezervate.</p>
      </div>
    </footer>
  );
}