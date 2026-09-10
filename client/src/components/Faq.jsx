import { useState } from 'react';
import { FAQ, MESSAGES, whatsappLink } from '../content.js';
import { Plus } from './Icons.jsx';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section section--soft" id="duvidas">
      <div className="container faq">
        <div className="faq__intro reveal">
          <p className="eyebrow">Dúvidas frequentes</p>
          <h2 className="section-title">
            Tudo o que você <em>precisa saber</em>
          </h2>
          <p className="section-lead">
            Ficou com alguma outra dúvida? Será um prazer conversar com você.
          </p>
          <a className="link-arrow" href={whatsappLink(MESSAGES.geral)} target="_blank" rel="noreferrer">
            Falar com a Luana
          </a>
        </div>

        <div className="faq__list reveal">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    id={`faq-btn-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    {item.q}
                    <span className="faq__icon" aria-hidden="true">
                      <Plus width="18" height="18" />
                    </span>
                  </button>
                </h3>
                <div className="faq__answer" id={`faq-${i}`} role="region" aria-labelledby={`faq-btn-${i}`}>
                  <div>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
