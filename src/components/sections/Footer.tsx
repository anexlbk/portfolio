import React from "react";

const Footer = () => (
  <footer className="border-t border-white/5 py-8 mt-20">
    <div className="max-w-7xl mx-auto px-6 sm:px-16 xl:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-secondary text-xs font-manrope">
        &copy; 2026 Anes Lachemi. All rights reserved.
      </p>
      <div className="flex gap-6">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-tech-accent text-xs font-manrope transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="mailto:anes@example.com"
          className="text-secondary hover:text-tech-accent text-xs font-manrope transition-colors"
        >
          Email
        </a>
        <a
          href="https://feron.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-tech-accent text-xs font-manrope transition-colors"
        >
          Feron
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
