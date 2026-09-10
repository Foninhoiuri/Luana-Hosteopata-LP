import { MESSAGES, whatsappLink } from '../content.js';
import { ArrowRight, Check } from './Icons.jsx';

const CREDENTIALS = [
  'Fisioterapeuta há 18 anos',
  'Osteopata há 10 anos',
  'Especializada em gestantes, pós-parto e bebês',
];

export default function About() {
  return (
    <section className="section section--soft" id="sobre">
      <div className="container about">
        <div className="about__media reveal">
          <div className="about__frame">
            <img src="/images/sobre.jpg" alt="Luana Helena sorrindo, sentada em seu consultório" loading="lazy" />
          </div>
          <div className="about__note">
            <span className="about__note-number">+1000</span>
            <span>famílias cuidadas com carinho</span>
          </div>
        </div>

        <div className="about__content">
          <p className="eyebrow reveal">Conheça minha abordagem</p>
          <h2 className="section-title reveal">
            Olá, sou <em>Luana Helena</em>
          </h2>

          <blockquote className="about__quote reveal">
            Sou osteopata especializada em gestantes, bebês e mulheres no pós-parto. Meu trabalho é trazer alívio das
            dores de forma natural, sem medicamentos ou aparelhos, apenas com técnicas manuais seguras e eficazes.
            Será um prazer cuidar de você e da sua família.
          </blockquote>

          <ul className="about__list reveal">
            {CREDENTIALS.map((c) => (
              <li key={c}>
                <Check width="16" height="16" />
                {c}
              </li>
            ))}
          </ul>

          <div className="reveal">
            <a className="btn btn--primary" href={whatsappLink(MESSAGES.geral)} target="_blank" rel="noreferrer">
              Quero ser cuidada
              <ArrowRight width="18" height="18" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
