import { HERO_VIDEO, MESSAGES, STATS, whatsappLink } from '../content.js';
import VideoSlot from './VideoSlot.jsx';
import { ArrowRight, Hands, Leaf } from './Icons.jsx';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow reveal">Osteopatia para gestantes, pós-parto e bebês</p>

          <h1 className="hero__title reveal">
            Alívio natural para <em>você</em> e para o <em>seu bebê</em>
          </h1>

          <p className="hero__lead reveal">
            Técnicas manuais suaves, sem medicamentos ou aparelhos, para que a gestação, o pós-parto e os primeiros
            meses do bebê sejam vividos com mais leveza e acolhimento.
          </p>

          <div className="hero__actions reveal">
            <a className="btn btn--primary" href={whatsappLink(MESSAGES.geral)} target="_blank" rel="noreferrer">
              Agendar pelo WhatsApp
              <ArrowRight width="18" height="18" />
            </a>
            <a className="btn btn--ghost" href="#sobre">
              Conheça a abordagem
            </a>
          </div>

          <dl className="hero__stats reveal">
            {STATS.map((s) => (
              <div key={s.label} className="hero__stat">
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__media reveal">
          <div className="hero__arch" aria-hidden="true" />

          <svg className="hero__badge" viewBox="0 0 200 200" aria-hidden="true">
            <defs>
              <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
            </defs>
            <text>
              <textPath href="#badge-circle">
                acolhimento · cuidado · leveza · osteopatia ·
              </textPath>
            </text>
          </svg>

          <VideoSlot src={HERO_VIDEO.src} poster={HERO_VIDEO.poster} />

          <div className="float-card float-card--top">
            <span className="float-card__icon">
              <Leaf width="18" height="18" />
            </span>
            <span>
              <strong>Sem medicamentos</strong>
              <small>Alívio 100% natural</small>
            </span>
          </div>

          <div className="float-card float-card--bottom">
            <span className="float-card__icon">
              <Hands width="18" height="18" />
            </span>
            <span>
              <strong>Toque suave e seguro</strong>
              <small>Gestantes · Pós-parto · Bebês</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
