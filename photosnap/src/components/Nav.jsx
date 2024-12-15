// Nav.jsx
const Nav = ({ className, type }) => {
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
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
