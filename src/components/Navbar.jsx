import React from 'react';
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Image from './Image';

const navigation = [
  { name: 'Acasă', href: '/' },
  { name: 'De vânzare', href: '/properties' },
  { name: 'Parteneri', href: '/partners' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-32 flex-col justify-center">
              {/* Logo et titre - aligné à gauche */}
              <div className="flex justify-between items-center mb-4">
                <Link to="/" className="flex items-center">
                  <Image className="h-20 w-20 object-cover" src="/images/LOGO.jpg" alt="Claire Immobiliare" />
                  <div className="ml-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-goldenrod">Claire Immobiliare</h1>
                    <p className="text-goldenrod text-sm">Strada 602 N°32 - 317235 Pecica, Jud Arad</p>
                  </div>
                </Link>

                {/* Téléphones et Facebook - aligné à droite */}
                <div className="hidden md:flex items-center space-x-8">
                  <div className="flex flex-col">
                    <div className="flex items-center mb-1">
                      <PhoneIcon className="h-4 w-4 text-goldenrod mr-2" />
                      <a href="tel:0786256027" className="text-lg text-goldenrod hover:text-yellow-500">0786 256 027</a>
                    </div>
                    <div className="flex items-center">
                      <PhoneIcon className="h-4 w-4 text-goldenrod mr-2" />
                      <a href="tel:0786048044" className="text-lg text-goldenrod hover:text-yellow-500">0786 048 044</a>
                    </div>
                  </div>
                  <a href="https://www.facebook.com/claireimmobiliare/" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/facebook.png" alt="Facebook" className="h-8 w-8" />
                  </a>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-end items-center">
                <div className="hidden md:flex space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-goldenrod hover:text-yellow-500 px-3 py-2 text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Menu mobile */}
                <div className="md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-goldenrod hover:bg-gray-800 focus:outline-none">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          {/* Panel mobile */}
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-goldenrod hover:bg-gray-800"
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <div className="flex items-center mb-1">
                  <PhoneIcon className="h-4 w-4 text-goldenrod mr-2" />
                  <a href="tel:0786256027" className="text-goldenrod hover:text-yellow-500">0786 256 027</a>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="h-4 w-4 text-goldenrod mr-2" />
                  <a href="tel:0786048044" className="text-goldenrod hover:text-yellow-500">0786 048 044</a>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}