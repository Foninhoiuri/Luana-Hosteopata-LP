import { MESSAGES, whatsappLink } from '../content.js';
import { WhatsApp } from './Icons.jsx';

export default function WhatsAppFloat() {
  return (
    <a
      className="whats-float"
      href={whatsappLink(MESSAGES.geral)}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar pelo WhatsApp"
    >
      <WhatsApp width="26" height="26" />
    </a>
  );
}
