import { BENEFITS } from '../content.js';

export default function Benefits() {
  return (
    <section className="section section--dark" id="beneficios">
      <div className="container">
        <div className="section-head section-head--split reveal">
          <div>
            <p className="eyebrow eyebrow--light">Benefícios da osteopatia</p>
            <h2 className="section-title">
              Transformação <em>natural</em> e segura
            </h2>
          </div>
          <p className="section-lead">
            Um cuidado pensado em cada detalhe — para você se sentir ouvida, cuidada e respeitada em cada sessão.
          </p>
        </div>

        <ol className="benefits">
          {BENEFITS.map((b, i) => (
            <li key={b.title} className="benefit reveal" style={{ '--delay': `${i * 90}ms` }}>
              <span className="benefit__index">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="benefit__title">{b.title}</h3>
              <p className="benefit__text">{b.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
