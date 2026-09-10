import { AUDIENCES, whatsappLink } from '../content.js';
import { ArrowUpRight, Baby, Woman } from './Icons.jsx';

const ICONS = { mulheres: Woman, bebes: Baby };

export default function Audiences() {
  return (
    <section className="section" id="para-quem">
      <div className="container">
        <div className="audiences">
          <img className="audiences__photo" src="/images/para-quem.jpg" alt="Luana Helena fazendo anotações em seu consultório" loading="lazy" />

          <div className="audiences__content">
            <div className="audiences__head reveal">
              <p className="eyebrow">Para quem é</p>
              <h2 className="section-title">
                Está cansada de viver com dores na gestação ou de ver seu bebê sofrer com <em>cólicas?</em>
              </h2>
              <p className="section-lead">Existe um caminho natural e acolhedor para o alívio.</p>
            </div>

            <div className="audiences__cards">
              {AUDIENCES.map((a, i) => {
                const Icon = ICONS[a.id];
                return (
                  <article key={a.id} className={`audience audience--${a.id} reveal`} style={{ '--delay': `${i * 120}ms` }}>
                    <div className="audience__top">
                      <span className="audience__icon">
                        <Icon width="22" height="22" />
                      </span>
                      <h3>{a.title}</h3>
                    </div>
                    <p>{a.text}</p>
                    <ul className="tags" aria-label={`Queixas comuns — ${a.title.toLowerCase()}`}>
                      {a.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                    <a className="link-arrow" href={whatsappLink(a.cta.message)} target="_blank" rel="noreferrer">
                      {a.cta.label}
                      <ArrowUpRight width="16" height="16" />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
