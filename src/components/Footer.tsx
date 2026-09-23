import { socialLinks } from "@/components/Socials";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Work", id: "work" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Contact", id: "contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-overlay/[0.08]">
      <div className="container mx-auto flex flex-col items-center gap-5 px-4 py-8 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left lg:px-8">
        <p className="text-sm text-muted">
          © {year} Ahmad Hassan. All rights reserved.
        </p>

        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm text-muted transition hover:text-accent"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              title={link.name}
              className="icon-link"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
