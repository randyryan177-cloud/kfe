"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Core Work', href: '#focus' },
    { name: 'Strategy', href: '#approach' },
    { name: 'Action Gallery', href: '#gallery' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2D6A4F] to-[#0F2E22] flex items-center justify-center">
              <span className="text-white font-bold text-lg">KFE</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-[#0F2E22]">KFE Consortium</span>
              <p className="text-xs text-[#40916C] -mt-1">Kakamega Forest Ecosystem</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#2D6A4F] ${
                  isScrolled ? 'text-[#171717]' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#support"
              className="px-6 py-2.5 bg-[#2D6A4F] text-white text-sm font-semibold rounded-full hover:bg-[#1B4332] transition-all shadow-md hover:shadow-lg"
            >
              Support Conservation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-[#171717]' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-[#2D6A4F] ${
                    isScrolled ? 'text-[#171717]' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#support"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-2.5 bg-[#2D6A4F] text-white text-sm font-semibold rounded-full hover:bg-[#1B4332] transition-all text-center"
              >
                Support Conservation
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
