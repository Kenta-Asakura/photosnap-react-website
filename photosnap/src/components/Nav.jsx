const Nav = ({ className, type, setCurrentPage, toggleMobileMenu }) => {
  const links = [
    { href: '/stories', label: 'Stories' },
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
  ];

  if (type === 'footer') {
    links.unshift({ href: '/home', label: 'Home' });
  }

  return (
    <nav className={className}>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(link.label.toLowerCase());
                window.scrollTo({ top: 0, behavior: 'smooth' });
                if (toggleMobileMenu) {
                  toggleMobileMenu();
                }
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
