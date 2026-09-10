import { useRef, useState } from 'react';
import { Play } from './Icons.jsx';

/**
 * Player de vídeo horizontal com capa e botão de play.
 * Só carrega o vídeo quando a pessoa clica; depois exibe os controles nativos, com som.
 */
export default function VideoPlayer({ src, poster, title, duration }) {
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);

  const start = () => {
    setStarted(true);
    requestAnimationFrame(() => videoRef.current?.play().catch(() => {}));
  };

  return (
    <div className={`player ${started ? 'is-started' : ''}`}>
      <video
        ref={videoRef}
        className="player__video"
        src={started ? src : undefined}
        poster={poster}
        controls={started}
        playsInline
        preload="none"
        aria-label={title}
      />

      {!started && (
        <button type="button" className="player__cover" onClick={start} aria-label={`Assistir: ${title}`}>
          <span className="player__play" aria-hidden="true">
            <Play width="26" height="26" />
          </span>
          <span className="player__meta">
            <strong>{title}</strong>
            {duration && <small>{duration}</small>}
          </span>
        </button>
      )}
    </div>
  );
}
