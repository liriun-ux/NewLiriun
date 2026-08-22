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
          ¡Contáctanos! Cuéntanos qué necesitas  <br />
          y nos pondremos en contacto contigo.
          <br />
          <br />
          Priorizamos una comunicación que se<br />
adapte a las necesidades de cada cliente.        </span>
      </blockquote>
    </div>
  );
}
