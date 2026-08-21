'use client'
import { useState, useEffect } from "react";
import Link from "next/link";

export default function SidebarEmpty() {
      const [isOpen, setIsOpen] = useState(false);
       const [activeHash, setActiveHash] = useState("");


  const sections = [
    "#inicio",
    "#producto",
    "#proceso",
    "#diseno",
    "#contactos",
  ];

useEffect(() => {
    const updateActiveSection = () => {
      const hash = window.location.hash;

      if (sections.includes(hash)) {
        setActiveHash(hash);
      }
    };

    updateActiveSection();

    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  const isActive = (hash: string) => {
    return activeHash === hash ? "menu-list__item--active" : "";
  };

  return (
      <>
    <div className="sidebar-empty--fixed">
      <div className="sidebar-empty  sidebar-empty--right sidebar-empty--zindex ">
        <div className="sidebar-empty__menu-wrapper">
          <button    type="button" name="burger" 
            className={isOpen ? "burger burger--cross" : "burger"}
      onClick={() => setIsOpen(!isOpen)}
          >
            <span className="burger__line" />
          </button>
        </div>
      </div>
    </div>


        <div     className={isOpen ? "menu-sided default__menu menu-sided--active" : "menu-sided default__menu"}         >
      <div className="menu-sided__overlay hidden-mobile hidden-tablet">
        <div className="menu-sided__logo-wrapper">
          <img
            src="/images/logo.svg"
            alt="logo"
            className="menu-sided__logo"
          />
        </div>
      </div>

        <div     className={isOpen ? "menu-sided__wrapper-activate menu-sided__wrapper" : "menu-sided__wrapper"}         >

        <div className="menu-list menu-sided__top">
          <ul className="menu-list__items">
                <li className={`menu-list__item menu-item ${isActive("#inicio")}`}>
              <a
                href="/#inicio"
                className="menu-list__link"
                aria-current="page"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="menu-list__icon-wrapper">
                  <span className="menu-list__icon menu-list__icon--box" />
                </span>

                <span className="menu-list__title">
                  <span className="menu-list__font">inicio</span>
                </span>
              </a>
            </li>


      <li className={`menu-list__item menu-item ${isActive("#producto")}`}>
              <a href="/#producto" className="menu-list__link" onClick={() => setIsOpen(!isOpen)}>
                <span className="menu-list__icon-wrapper">
                  <span className="menu-list__icon menu-list__icon--box" />
                </span>

                <span className="menu-list__title">
                  <span className="menu-list__font">productos</span>
                </span>
              </a>
            </li>

      <li className={`menu-list__item menu-item ${isActive("#proceso")}`}>
              <a href="/#proceso" className="menu-list__link" onClick={() => setIsOpen(!isOpen)}>
                <span className="menu-list__icon-wrapper">
                  <span className="menu-list__icon menu-list__icon--about" />
                </span>

                <span className="menu-list__title">
                  <span className="menu-list__font">proceso</span>
                </span>
              </a>
            </li>

<li className={`menu-list__item menu-item ${isActive("#diseno")}`}>
              <a href="/#diseno" className="menu-list__link" onClick={() => setIsOpen(!isOpen)}>
                <span className="menu-list__icon-wrapper">
                  <span className="menu-list__icon menu-list__icon--tech" />
                </span>

                <span className="menu-list__title">
                  <span className="menu-list__font">diseño</span>
                </span>
              </a>
            </li>

<li className={`menu-list__item menu-item ${isActive("#contactos")}`}>
              <a href="/#contactos" className="menu-list__link" onClick={() => setIsOpen(!isOpen)}>
                <span className="menu-list__icon-wrapper">
                  <span className="menu-list__icon menu-list__icon--process" />
                </span>

                <span className="menu-list__title">
                  <span className="menu-list__font">contactos</span>
                </span>
              </a>
            </li>

          </ul>
        </div>


        <div className="menu-sided__footer">
          <div className="menu-contact menu-item menu-sided__contact hidden-mobile hidden-tablet">
            <a href="/#contactos" className="menu-contact__wrapper" onClick={() => setIsOpen(!isOpen)}>
              <span className="menu-contact__icon-wrapper">
                <img
                  src="/images/grids/contacts-grid.svg"
                  alt="contacts-grid"
                  className="menu-contact__icon menu-contact__icon--contacts"
                />
              </span>

              <span className="menu-contact__caption">
                <span className="menu-contact__font menu-contact__font--muted">
                  Tienes un projecto? Comunicate!
                </span>

                <span className="menu-contact__font menu-contact__font--title">
                  Contactanos
                </span>
              </span>
            </a>
          </div>


          <div className="menu-sided__copyright hidden-desktop">
            <span className="menu-sided__font">
              © LIRIUN-UX
            </span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
