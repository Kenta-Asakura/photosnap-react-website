const Nav = ({ className, type, setCurrentPage }) => {
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
                e.preventDefault(); // Prevent default behavior
                setCurrentPage(link.label.toLowerCase()); // Set current page
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
