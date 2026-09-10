import { useState } from 'react';
import { MESSAGES, PREGNANCY, whatsappLink } from '../content.js';
import VideoPlayer from './VideoPlayer.jsx';
import { ArrowRight, Heart, WhatsApp } from './Icons.jsx';

const SHARE_TEXT = 'Dores na gestação são comuns, mas não são normais. Assista a este vídeo da Luana Helena, osteopata especializada em gestantes:';

export default function Pregnancy() {
  const [shared, setShared] = useState(false);

  const share = async () => {
    const url = window.location.origin;
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Dores na gestação', text: SHARE_TEXT, url });
      } catch {
        /* compartilhamento cancelado */
      }
      return;
    }
    window.open(`https://wa.me/?text=${encodeURIComponent(`${SHARE_TEXT} ${url}`)}`, '_blank', 'noopener');
    setShared(true);
  };

  return (
    <section className="section" id="gestacao">
      <div className="container">
        <div className="section-head section-head--split reveal">
          <div>
            <p className="eyebrow">Dores na gestação</p>
            <h2 className="section-title">
              Comum, mas <em>não é normal</em>
            </h2>
          </div>
          <p className="section-lead">
            Neste vídeo eu explico por que as dores aparecem durante a gravidez — e como a osteopatia ajuda o seu corpo a
            se adaptar com mais conforto.
          </p>
        </div>

        <div className="pregnancy">
          <div className="pregnancy__video reveal">
            <VideoPlayer
              src={PREGNANCY.video}
              poster={PREGNANCY.poster}
              title="Alívio das dores na gestação"
              duration="1 min"
            />
          </div>

          <ol className="pregnancy__points">
            {PREGNANCY.points.map((p, i) => (
              <li key={p.title} className="pregnancy__point reveal" style={{ '--delay': `${i * 100}ms` }}>
                <span className="pregnancy__num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="pregnancy__actions reveal">
          <a className="btn btn--primary" href={whatsappLink(MESSAGES.mulher)} target="_blank" rel="noreferrer">
            <WhatsApp width="18" height="18" />
            Quero uma gestação sem dor
          </a>
          <button type="button" className="btn btn--ghost" onClick={share}>
            <Heart width="18" height="18" />
            {shared ? 'Obrigada por compartilhar!' : 'Compartilhar com uma gestante'}
          </button>
          <a className="link-arrow" href="#duvidas">
            Ver dúvidas frequentes
            <ArrowRight width="16" height="16" />
          </a>
        </div>
      </div>
    </section>
  );
}
