import { useEffect, useState } from 'react';
import { NAV, MESSAGES, whatsappLink } from '../content.js';
import { WhatsApp } from './Icons.jsx';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container header__inner">
        <a href="#inicio" className="header__logo" aria-label="Luana Helena — início" onClick={close}>
          <img src="/images/logo.png" alt="Luana Helena · Osteopata Especializada" width="900" height="297" />
        </a>

        <nav className="header__nav" id="menu-principal" aria-label="Principal">
          <ul>
            {NAV.map((item, i) => (
              <li key={item.href} style={{ '--i': i }}>
                <a href={item.href} onClick={close}>
                  <span className="header__nav-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="btn btn--primary header__cta-mobile"
            href={whatsappLink(MESSAGES.geral)}
            target="_blank"
            rel="noreferrer"
            onClick={close}
          >
            <WhatsApp width="18" height="18" />
            Agendar consulta
          </a>
        </nav>

        <a className="btn btn--primary btn--sm header__cta" href={whatsappLink(MESSAGES.geral)} target="_blank" rel="noreferrer">
          Agendar consulta
        </a>

        <button
          className="header__toggle"
          type="button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className="header__backdrop" onClick={close} aria-hidden="true" />
    </header>
  );
}
