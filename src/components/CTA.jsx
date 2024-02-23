import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">如果您对我感兴趣 ➡️</p>
      <div
        onClick={window.open(
          `https://github.com/Echogithu/chair-configurator/blob/main/public/demo.png?raw=true`
        )}
        className="btn cursor-pointer"
      >
        查看简历
      </div>
    </section>
  );
};

export default CTA;
