import { STEPS } from '../content.js';

export default function Steps() {
  return (
    <section className="section" id="como-funciona">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow eyebrow--center">Como funciona</p>
          <h2 className="section-title">
            Sua jornada de <em>cuidado</em>
          </h2>
        </div>

        <ol className="steps">
          {STEPS.map((s, i) => (
            <li key={s.title} className="step reveal" style={{ '--delay': `${i * 120}ms` }}>
              <span className="step__number">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
