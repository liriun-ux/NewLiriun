export default function ContactPopupRight() {
  return (
    <div className="contact-popup__col contact-popup__col--right">
      <img
        src="/images/grids/contact-lg.svg"
        alt="contact"
        className="contact-popup__image"
      />

      <blockquote className="contact-popup__blockquote title">
        <span className="title__border title__border--accent"></span>

        <span className="title__font title__font--title-sm titleContact">
          We&nbsp;are interested in&nbsp;effective <br />
          and long-term cooperation.
          <br />
          <br />
          We&nbsp;love complex, innovative tasks <br />
          and ready to&nbsp;make them&nbsp;for&nbsp;you
        </span>
      </blockquote>
    </div>
  );
}
