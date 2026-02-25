"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

type HeaderProps = {
  name?: string;
};

export default function Header({ name }: HeaderProps): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#aboutme" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-300" style={{
      backgroundColor: theme === 'dark' ? 'rgba(17, 7, 32, 0.8)' : 'rgba(255, 255, 255, 0.8)',
      borderColor: 'var(--border-color)'
    }}>
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold hover:opacity-80 transition-opacity flex items-center"
            style={{ color: 'var(--foreground)' }}
            onClick={() => setIsMenuOpen(false)}
          >
            {name ? (
              <span
                className="flex items-center justify-center"
                style={{
                  padding: "0.2rem 0.4rem",
                  fontSize: "clamp(1.2rem, 1.4vw + 1rem, 1.9rem)",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, #ffd194, #ff9a9e, #fad0c4)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    display: "inline-block",
                  }}
                >
                  {name}
                </span>
              </span>
            ) : (
              <Image
                src="/logo/logo.svg"
                alt="Logo"
                width={100}
                height={100}
                style={{ width: "auto", height: "auto" }}
              />
            )}
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.name} className="m-0 p-0">
                {link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                  <Link
                    href={link.href}
                    className="font-medium transition-colors relative group"
                    style={{ color: 'var(--foreground-secondary)' }}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-orange transition-all duration-300 group-hover:w-full" />
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="font-medium transition-colors relative group"
                    style={{ color: 'var(--foreground-secondary)' }}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-orange transition-all duration-300 group-hover:w-full" />
                  </a>
                )}
              </li>
            ))}

            {/* Theme Toggle */}
            <li>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  color: 'var(--accent-primary)'
                }}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all"
              style={{
                backgroundColor: 'var(--card-bg)',
                color: 'var(--accent-primary)'
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              className="focus:outline-none"
              style={{ color: 'var(--foreground)' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 shadow-xl p-4 flex flex-col items-center gap-4 animate-in slide-in-from-top-2 duration-200" style={{
            backgroundColor: theme === 'dark' ? '#110720' : '#ffffff',
            borderBottom: '1px solid var(--border-color)'
          }}>
            {navLinks.map((link) => (
              link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium w-full text-center py-2 transition-colors"
                  style={{ color: 'var(--foreground-secondary)' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium w-full text-center py-2 transition-colors"
                  style={{ color: 'var(--foreground-secondary)' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

