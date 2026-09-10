import { useEffect, useRef, useState } from 'react';
import { Pause, Play, SoundOff, SoundOn } from './Icons.jsx';

/**
 * Slot de vídeo vertical (9:16).
 * Toca em loop, sem som, assim que carrega. Se o arquivo não existir,
 * exibe o poster (foto) com um aviso discreto — visível apenas em desenvolvimento.
 */
export default function VideoSlot({ src, poster }) {
  const videoRef = useRef(null);
  const [failed, setFailed] = useState(!src);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const [autoPlay] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  // Se a aba estava oculta no carregamento, tenta tocar quando ela ficar visível.
  useEffect(() => {
    if (failed || !autoPlay) return;
    const onVisible = () => {
      const video = videoRef.current;
      if (!document.hidden && video?.paused) video.play().catch(() => {});
    };
    document.addEventListener('visibilitychange', onVisible);
    return () => document.removeEventListener('visibilitychange', onVisible);
  }, [failed, autoPlay]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (!video.muted && video.paused) video.play().catch(() => {});
  };

  return (
    <div className="video-slot">
      {failed ? (
        <>
          <img className="video-slot__media video-slot__media--poster" src={poster} alt="Luana Helena, osteopata" />
          {import.meta.env.DEV && (
            <div className="video-slot__placeholder">
              <span className="video-slot__play" aria-hidden="true">
                <Play width="18" height="18" />
              </span>
              <strong>Espaço para vídeo vertical</strong>
              <small>9:16 · client/public/video/hero.mp4</small>
            </div>
          )}
        </>
      ) : (
        <>
          <video
            ref={videoRef}
            className="video-slot__media"
            src={src}
            poster={poster}
            autoPlay={autoPlay}
            muted
            loop
            playsInline
            preload="metadata"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onError={() => setFailed(true)}
            onClick={togglePlay}
          />
          <div className="video-slot__controls">
            <button type="button" onClick={togglePlay} aria-label={playing ? 'Pausar vídeo' : 'Reproduzir vídeo'}>
              {playing ? <Pause width="16" height="16" /> : <Play width="16" height="16" />}
            </button>
            <button type="button" onClick={toggleMute} aria-label={muted ? 'Ativar som' : 'Desativar som'}>
              {muted ? <SoundOff width="17" height="17" /> : <SoundOn width="17" height="17" />}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
