const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Work", id: "work" },
  { name: "Contact", id: "contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-overlay/[0.08]">
      <div className="container mx-auto flex flex-col items-center gap-4 px-4 py-8 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left lg:px-8">
        <p className="text-sm text-muted">
          © {year} Ahmad Hassan. All rights reserved.
        </p>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2 items-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm text-muted transition hover:text-accent"
            >
              {link.name}
            </a>
          ))}
          <div className="ml-4 flex items-center gap-4">
            <a
              href="https://github.com/ahmad129096"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-muted transition hover:text-text"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 2C6.477 2 2 6.484 2 12.02c0 4.426 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.953 0-1.093.39-1.988 1.03-2.687-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.845c.85.004 1.705.115 2.504.338 1.91-1.296 2.748-1.027 2.748-1.027.546 1.379.202 2.398.099 2.65.64.699 1.028 1.594 1.028 2.687 0 3.85-2.338 4.697-4.566 4.944.359.31.679.92.679 1.852 0 1.337-.012 2.417-.012 2.747 0 .268.18.58.688.481C19.137 20.197 22 16.442 22 12.02 22 6.484 17.523 2 12 2z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ahmad-hassan-792619140/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-muted transition hover:text-text"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.5 17.5V10H6v7.5h2.5zM7.25 8.75a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM18 17.5V13c0-2.2-1.2-3.25-3-3.25-1.375 0-1.99.75-2.345 1.275V10H10v7.5h2.5v-3.5c0-.875.375-1.75 1.5-1.75 1 0 1.125 1 1.125 1.875V17.5H18z"/>
              </svg>
            </a>
            <a
              href="https://cal.com/ahmadhassan/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary ml-2"
            >
              Book a call
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
