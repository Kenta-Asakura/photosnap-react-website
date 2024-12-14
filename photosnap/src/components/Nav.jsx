// Nav.jsx
const Nav = ({ className, type }) => {
  const links = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  if (type === 'footer') {
    links.unshift({ href: '/home', label: 'Home' });
  }

  return (
    <nav className={className}>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
