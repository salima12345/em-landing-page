import { div } from "framer-motion/client";

export default function InteractiveImages() {
  return (
  <div className="em-values">
     <div className="content-em-values">
      <h3 className="reveal__title" style={{ opacity: 1 }}>
        <small style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0%)' }}>
          Avant de faire, nous sommes d'abord une manière d’être.
        </small>
      </h3>

      <div className="images">
        <div
          className="inclusion img drag__image"
          style={{
            transform: 'translate3d(0px, 33px, 0px) rotate(4.499deg)',
            opacity: 0.7368,
            left: '21.1839%',
            touchAction: 'none',
            cursor: 'grab',
            userSelect: 'none',
            zIndex: 1001,
          }}
        >
          <img
            src="https://www.eliott-markus.com/wp-content/themes/em-wp/images/em-values/inclusion-min.png"
            style={{ touchAction: 'none' }}
          />
        </div>
        <div
          className="intelligence img drag__image"
          style={{
            transform: 'translate3d(0px, 33px, 0px) rotate(-2.3954deg)',
            opacity: 0.7368,
            right: '20.2629%',
            touchAction: 'none',
            cursor: 'grab',
            userSelect: 'none',
            zIndex: 1006,
          }}
        >
          <img
            src="https://www.eliott-markus.com/wp-content/themes/em-wp/images/em-values/intelligence.png"
            style={{ touchAction: 'none' }}
          />
        </div>
        <div
          className="creativite img drag__image"
          style={{
            transform: 'translate3d(0px, -274px, 0px) rotate(2.3945deg)',
            opacity: 0.921,
            bottom: '-571px',
            left: '17.1049%',
            touchAction: 'none',
            cursor: 'grab',
            userSelect: 'none',
          }}
        >
          <img
            src="https://www.eliott-markus.com/wp-content/themes/em-wp/images/em-values/creativite-min.png"
            style={{ touchAction: 'none' }}
          />
        </div>

        <a
          href="https://www.eliott-markus.com/talents-equipe/"
          className="values"
          style={{
            transform: 'translate3d(0px, 0px, 0px) rotate(-0.9856deg)',
            opacity: 0.8803,
            bottom: '-362px',
          }}
        >
          <div className="info">
            <h2>Les gens derrière les valeurs</h2>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="12.943" height="12.943" viewBox="0 0 12.943 12.943">
                <g id="Groupe_1196" data-name="Groupe 1196" transform="translate(278.711 -2126.905)">
                  <path
                    id="Tracé_2300"
                    data-name="Tracé 2300"
                    d="M10.5,20.615,20.615,10.5"
                    transform="translate(-287.796 2117.82)"
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                  <path
                    id="Tracé_2301"
                    data-name="Tracé 2301"
                    d="M10.5,10.5H20.615V20.615"
                    transform="translate(-287.796 2117.82)"
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
          <div>
            <picture>
              <source type="image/webp" srcSet="https://www.eliott-markus.com/wp-content/uploads/2023/05/marie.png.webp" />
              <img src="https://www.eliott-markus.com/wp-content/uploads/2023/05/marie.png" alt="Image EM Value" />
            </picture>
          </div>
        </a>
        <div
          className="authenticite img drag__image"
          style={{
            transform: 'translate3d(0px, -200px, 0px) rotate(0.0919deg) skew(0.0001deg, 0deg) scale(1, 1.00001)',
            opacity: 0.8803,
            bottom: '-509px',
            right: '11.486%',
            touchAction: 'none',
            cursor: 'grab',
            userSelect: 'none',
          }}
        >
          <img
            src="https://www.eliott-markus.com/wp-content/themes/em-wp/images/em-values/authenticite.png"
            style={{ touchAction: 'none' }}
          />
        </div>
      </div>
    </div>
  </div>
  );
}