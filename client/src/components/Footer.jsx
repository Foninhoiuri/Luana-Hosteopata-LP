import { NAV, MESSAGES, WHATSAPP_DISPLAY, whatsappLink } from '../content.js';
import { WhatsApp } from './Icons.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src="/images/logo-clara.png" alt="Luana Helena · Osteopata Especializada" width="900" height="297" loading="lazy" />
            <p className="footer__tagline">“Seu bem-estar e o do seu bebê merecem cuidado humano e especializado.”</p>
          </div>

          <nav className="footer__col" aria-label="Rodapé">
            <h4>Navegação</h4>
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="footer__col">
            <h4>Contato</h4>
            <a href={whatsappLink(MESSAGES.geral)} target="_blank" rel="noreferrer" className="footer__whats">
              <WhatsApp width="16" height="16" />
              {WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Luana Helena · Osteopatia Especializada. Todos os direitos reservados.</span>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </div>
    </footer>
  );
}
