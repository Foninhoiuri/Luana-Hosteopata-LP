import { MESSAGES, whatsappLink } from '../content.js';
import { WhatsApp } from './Icons.jsx';

export default function Contact() {
  return (
    <section className="section" id="contato">
      <div className="container">
        <div className="cta-card reveal">
          <img className="cta-card__mark" src="/images/icon.png" alt="" aria-hidden="true" />

          <p className="eyebrow eyebrow--center">Dê o primeiro passo</p>
          <h2 className="section-title">
            O seu bem-estar e o do seu bebê são <em>nossa prioridade</em>
          </h2>
          <p className="section-lead">
            Me chame no WhatsApp, conte um pouco do que está sentindo e escolhemos juntas o melhor horário para você.
          </p>

          <div className="cta-card__buttons">
            <a className="btn btn--primary" href={whatsappLink(MESSAGES.mulher)} target="_blank" rel="noreferrer">
              <WhatsApp width="18" height="18" />
              Agendar meu momento de cuidado
            </a>
            <a className="btn btn--ghost" href={whatsappLink(MESSAGES.bebe)} target="_blank" rel="noreferrer">
              <WhatsApp width="18" height="18" />
              Quero um momento para meu bebê
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
