import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">如果您对我感兴趣 ➡️</p>
      <Link to="/contact" className="btn">
        请联系我
      </Link>
    </section>
  );
};

export default CTA;
