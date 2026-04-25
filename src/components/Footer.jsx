/* Footer.jsx */

const WA_NUMBER = '51999999999';

const s = {
  footer: {
    background: 'rgba(8,5,16,0.8)',
    borderTop: '1px solid rgba(168,85,247,0.08)',
    padding: '3rem 2rem',
  },
  inner: {
    maxWidth: '1160px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.75rem',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
  },
  logoIcon: {
    width: '36px', height: '36px',
    borderRadius: '9px',
    background: 'linear-gradient(135deg, #5B21B6, #A855F7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Outfit, sans-serif',
    fontWeight: 900,
    fontSize: '13px',
    color: '#fff',
  },
  logoText: {
    fontFamily: 'Outfit, sans-serif',
    fontWeight: 800,
    fontSize: '1.15rem',
    color: '#fff',
  },
  logoAccent: { color: '#A855F7' },
  links: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  link: {
    color: '#6E6A85',
    textDecoration: 'none',
    fontSize: '0.85rem',
    fontWeight: 500,
    transition: 'color 0.2s',
    fontFamily: 'Outfit, sans-serif',
  },
  copy: {
    fontSize: '0.78rem',
    color: 'rgba(255,255,255,0.2)',
    textAlign: 'center',
    fontFamily: 'Outfit, sans-serif',
  },
};

const navItems = [
  ['#nosotros',  'Quiénes somos'],
  ['#planes',    'Planes'],
  ['#ventajas',  'Ventajas'],
  ['#cobertura', 'Cobertura'],
  ['#faq',       'FAQ'],
  [`https://wa.me/${WA_NUMBER}`, 'Contacto'],
];

export default function Footer() {
  return (
    <footer style={s.footer}>
      <div style={s.inner}>
        <a href="#inicio" style={s.logo}>
          {/* Reemplaza con tu logo: <img src={logo} alt="logo" style={{height:'36px'}} /> */}
          <div style={s.logoIcon}>FM</div>
          <span style={s.logoText}>
            Fibra<span style={s.logoAccent}>Max</span>
          </span>
        </a>

        <ul style={s.links}>
          {navItems.map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                style={s.link}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                onMouseEnter={e => (e.currentTarget.style.color = '#A855F7')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6E6A85')}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <p style={s.copy}>
          © {new Date().getFullYear()} FibraMax — Cercado de Lima, Lima, Perú.
          Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
