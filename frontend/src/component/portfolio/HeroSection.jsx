import "../../styles/home.css";

const Hero = () => {
  return (
    <section className="portfolio-hero" id="home">

      <p className="portfolio-year text-secondary-text">'22</p>
      <p className="portfolio-name">MUSHARRAF SHAIKH</p>
      <div className="portfolio-stage">
        <h1 className="portfolio" aria-label="Portfolio">
          <span>P</span>
          <span>O</span>
          <span>R</span>
          <span>t</span>
          <span>f</span>
          <span>o</span>
          <span>L</span>
          <span>i</span>
          <span>o</span>
        </h1>

        <img src="./iam.png" alt="Musharraf Shaikh" className="portfolio-person" />
      </div>
    </section>
  );
};

export default Hero;
