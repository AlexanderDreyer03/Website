import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X } from 'lucide-react';

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { name: 'Startseite', path: '' },
    { name: 'Leistungen', submenu: [
      { name: 'bAV', path: 'betriebliche-altersvorsorge' },
      { name: 'BKV', path: 'betriebliche-krankenversicherung' },
      { name: 'Basisrente', path: 'basisrente' }
    ]},
    { name: 'Über uns', path: 'ueber-uns' },
    { name: 'Karriere', path: 'karriere' },
    { name: 'Kontakt', path: 'kontakt' }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* LOGO */}
            <Link to={createPageUrl('')} className="flex-shrink-0">
              <div className="font-bold text-xl text-blue-900">
                Vorsorge<span className="text-cyan-500">Spezial</span>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to={createPageUrl('')} className="text-gray-700 hover:text-cyan-500 transition font-medium">
                Startseite
              </Link>
              <div className="group relative">
                <button className="text-gray-700 hover:text-cyan-500 transition font-medium flex items-center gap-1">
                  Leistungen
                </button>
                <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                  <Link to={createPageUrl('betriebliche-altersvorsorge')} className="block px-4 py-2 hover:bg-gray-50 text-gray-700">
                    Betriebliche Altersvorsorge (bAV)
                  </Link>
                  <Link to={createPageUrl('betriebliche-krankenversicherung')} className="block px-4 py-2 hover:bg-gray-50 text-gray-700">
                    Betriebliche Krankenversicherung (BKV)
                  </Link>
                  <Link to={createPageUrl('basisrente')} className="block px-4 py-2 hover:bg-gray-50 text-gray-700">
                    Basisrente (Rürup)
                  </Link>
                </div>
              </div>
              <Link to={createPageUrl('ueber-uns')} className="text-gray-700 hover:text-cyan-500 transition font-medium">
                Über uns
              </Link>
              <Link to={createPageUrl('karriere')} className="text-gray-700 hover:text-cyan-500 transition font-medium">
                Karriere
              </Link>
              <Link to={createPageUrl('kontakt')} className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition font-medium">
                Kontakt
              </Link>
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* MOBILE NAV */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              <Link to={createPageUrl('')} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded">
                Startseite
              </Link>
              <div>
                <div className="px-4 py-2 text-gray-700 font-medium">Leistungen</div>
                <Link to={createPageUrl('betriebliche-altersvorsorge')} className="block px-8 py-2 text-gray-600 hover:bg-gray-50 rounded">
                  → bAV
                </Link>
                <Link to={createPageUrl('betriebliche-krankenversicherung')} className="block px-8 py-2 text-gray-600 hover:bg-gray-50 rounded">
                  → BKV
                </Link>
                <Link to={createPageUrl('basisrente')} className="block px-8 py-2 text-gray-600 hover:bg-gray-50 rounded">
                  → Basisrente
                </Link>
              </div>
              <Link to={createPageUrl('ueber-uns')} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded">
                Über uns
              </Link>
              <Link to={createPageUrl('karriere')} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded">
                Karriere
              </Link>
              <Link to={createPageUrl('kontakt')} className="block px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600">
                Kontakt
              </Link>
            </nav>
          )}
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-blue-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">VorsorgeSpezial</h3>
              <p className="text-blue-200">
                Spezialisiert auf Vorsorge, Steueroptimierung und individuelle Finanzplanung für Unternehmer und Selbstständige.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Leistungen</h4>
              <ul className="space-y-2 text-blue-200">
                <li><Link to={createPageUrl('betriebliche-altersvorsorge')} className="hover:text-white transition">bAV</Link></li>
                <li><Link to={createPageUrl('betriebliche-krankenversicherung')} className="hover:text-white transition">BKV</Link></li>
                <li><Link to={createPageUrl('basisrente')} className="hover:text-white transition">Basisrente</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Weitere Links</h4>
              <ul className="space-y-2 text-blue-200">
                <li><Link to={createPageUrl('ueber-uns')} className="hover:text-white transition">Über uns</Link></li>
                <li><Link to={createPageUrl('karriere')} className="hover:text-white transition">Karriere</Link></li>
                <li><Link to={createPageUrl('kontakt')} className="hover:text-white transition">Kontakt</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-blue-200 text-sm">
                © 2024 VorsorgeSpezial. Alle Rechte vorbehalten.
              </p>
              <div className="flex gap-6 text-sm text-blue-200">
                <Link to={createPageUrl('impressum')} className="hover:text-white transition">Impressum</Link>
                <Link to={createPageUrl('datenschutz')} className="hover:text-white transition">Datenschutz</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
