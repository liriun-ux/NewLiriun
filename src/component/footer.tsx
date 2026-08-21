// components/Footer.tsx
//
"use client"

import ArrowDown from "./arrow";
import ArrowUp from "./arrowUP";
import ScrollButtons from "@/utils/arrows";

export default function Footer() {


const social={
        name: "tikoko",
    href: "https://wa.me/5912344123423",
    socialName:"CONTACTOS"

}

const handleScroll = (direction: "up" | "down") => {
  const amount = window.innerHeight;
    console.log(direction,"::",amount)
  window.scrollBy({
    top: direction === "up" ? -amount : amount,
    behavior: "smooth",
  });
};

  return (
    <footer className="footer index-page__footer">
      <div className="footer__content">
        <div className="footer__content-wrapper">

          {/* Top */}
          <div className="footer__top-wrapper">
            <div className="footer-interactive footer__top hidden-mobile hidden-tablet">

              {/* Logo + Copyright */}
              <div className="footer-interactive__item footer-interactive__item--left">

                <div className="LogoUX">
              <img
    src="/images/LogoLX.png"
    alt="logo"
    className=" LogoUXImg"
  />
  </div>
                <div className="footer-interactive__copyright">
                  <span className="footer-interactive__font">
                    © LIRIUN-UX
                  </span>

                  <span className="footer-interactive__font last_foot_text ">
                    All Rights Reserved
                  </span>
                </div>
              </div>

              {/* Mouse / Scroll */}
              <div className="footer-interactive__item footer-interactive__item--center ArrowSlide"

  onWheel={(e) => {
    console.log(e.deltaY,"helooooo");
  }}
              >
              <ScrollButtons/>
              </div>

              {/* Contact */}
              <div className="footer-interactive__item footer-interactive__item--contact footer-interactive__item--right">
    <div className="main-section__buttons">

      <a
        href="/#contactos"
        className="button-primary main-section__button"
      >
        <span className="button-primary__font main-section__font--button ">
          CONTACTOS
          </span>
      </a>
    </div>
              </div>

            </div>
          </div>



        </div>
      </div>
    </footer>
  );
}
