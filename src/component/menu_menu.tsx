export default function SideMenu() {
  return (
    <div className="menu-sided default__menu">
      <div className="menu-sided__overlay hidden-mobile hidden-tablet">
        <div className="menu-sided__logo-wrapper">
          <img
            src="/images/logo.svg"
            alt="logo"
            className="menu-sided__logo"
          />
        </div>
      </div>

      <div className="menu-sided__wrapper">
        <div className="scroller menu-sided__scroller hidden-tablet hidden-mobile">
          <div className="scroller__thumb" />
        </div>

        <div className="menu-list menu-sided__top">
          <ul className="menu-list__items">
            <li className="menu-list__item menu-item menu-list__item--active">
              <a
                href="/"
                className="menu-list__link"
                aria-current="page"
              >
                <span className="menu-list__icon-wrapper">
                  <span className="menu-list__icon menu-list__icon--box" />
                </span>

                <span className="menu-list__title">
                  <span className="menu-list__font">intro</span>
                </span>
              </a>
            </li>

            <li className="menu-list__item menu-item">
              <a href="/#about" className="menu-list__link">
                <span className="menu-list__icon-wrapper">
                  <span className="menu-list__icon menu-list__icon--box" />
                </span>

                <span className="menu-list__title">
                  <span className="menu-list__font">about</span>
                </span>
              </a>
            </li>

            <li className="menu-list__item menu-item">
              <a href="/#achievements" className="menu-list__link">
                <span className="menu-list__icon-wrapper">
                  <span className="menu-list__icon menu-list__icon--about" />
                </span>

                <span className="menu-list__title">
                  <span className="menu-list__font">achievements</span>
                </span>
              </a>
            </li>

            <li className="menu-list__item menu-item">
              <a href="/#technologies" className="menu-list__link">
                <span className="menu-list__icon-wrapper">
                  <span className="menu-list__icon menu-list__icon--tech" />
                </span>

                <span className="menu-list__title">
                  <span className="menu-list__font">technologies</span>
                </span>
              </a>
            </li>

            <li className="menu-list__item menu-item">
              <a href="/#process" className="menu-list__link">
                <span className="menu-list__icon-wrapper">
                  <span className="menu-list__icon menu-list__icon--process" />
                </span>

                <span className="menu-list__title">
                  <span className="menu-list__font">process</span>
                </span>
              </a>
            </li>

            <li className="menu-list__item menu-item">
              <a href="/#quality" className="menu-list__link">
                <span className="menu-list__icon-wrapper">
                  <span className="menu-list__icon menu-list__icon--plus" />
                </span>

                <span className="menu-list__title">
                  <span className="menu-list__font">quality</span>
                </span>
              </a>
            </li>

            <li className="menu-list__item menu-item">
              <a href="/#team" className="menu-list__link">
                <span className="menu-list__icon-wrapper">
                  <span className="menu-list__icon menu-list__icon--brain" />
                </span>

                <span className="menu-list__title">
                  <span className="menu-list__font">team</span>
                </span>
              </a>
            </li>

            <li className="menu-list__item menu-item">
              <a href="/#portfolio" className="menu-list__link">
                <span className="menu-list__icon-wrapper">
                  <span className="menu-list__icon menu-list__icon--portfolio" />
                </span>

                <span className="menu-list__title">
                  <span className="menu-list__font">portfolio</span>
                </span>
              </a>
            </li>

            <li className="menu-list__item menu-item hidden-desktop">
              <a href="/#contact" className="menu-list__link">
                <span className="menu-list__icon-wrapper">
                  <span className="menu-list__icon menu-list__icon--contacts-grid" />
                </span>

                <span className="menu-list__title">
                  <span className="menu-list__font">contact us</span>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="menu-links menu-sided__center">
          <div className="menu-links__title hidden-mobile hidden-tablet">
            <span className="menu-links__font menu-links__font--title">
              More:
            </span>
          </div>

          <ul className="menu-links__items">
            <li className="menu-links__item">
              <a
                href="https://develup.pro/company/career"
                target="_blank"
                rel="noopener noreferrer"
                className="menu-links__link"
              >
                <span className="menu-links__font menu-links__font--muted">
                  career
                </span>
              </a>
            </li>

            <li className="menu-links__item">
              <a
                href="https://develup.pro/company/lab"
                target="_blank"
                rel="noopener noreferrer"
                className="menu-links__link"
              >
                <span className="menu-links__font menu-links__font--muted">
                  lab
                </span>
              </a>
            </li>

            <li className="menu-links__item">
              <a
                href="https://develup.pro/company/fun"
                target="_blank"
                rel="noopener noreferrer"
                className="menu-links__link"
              >
                <span className="menu-links__font menu-links__font--muted">
                  fun
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="menu-sided__footer">
          <div className="menu-contact menu-item menu-sided__contact hidden-mobile hidden-tablet">
            <a href="/#contact" className="menu-contact__wrapper">
              <span className="menu-contact__icon-wrapper">
                <img
                  src="/images/grids/contacts-grid.svg"
                  alt="contacts-grid"
                  className="menu-contact__icon menu-contact__icon--contacts"
                />
              </span>

              <span className="menu-contact__caption">
                <span className="menu-contact__font menu-contact__font--muted">
                  Have a project? Let&apos;s talk!
                </span>

                <span className="menu-contact__font menu-contact__font--title">
                  Contact US
                </span>
              </span>
            </a>
          </div>

          <div className="menu-socials menu-sided__socials">
            <div className="menu-socials__caption hidden-mobile hidden-tablet">
              <span className="menu-socials__font menu-socials__font--caption">
                Social:
              </span>
            </div>

            <ul className="menu-socials__items">
              <li className="menu-socials__item">
                <a
                  title="CodePen"
                  href="https://codepen.io/develup-pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="menu-socials__link"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="c-icon menu-socials__icon c-icon--codepen menu-socials__icon--codepen"
                  >
                    <path
                      d="M8 0L0 5.3V10.75L8 16L16 10.7V5.25L8 0ZM8.8 2.45L13.8 5.75L11.85 7.05L8.8 5V2.45ZM7.2 2.45V5L4.15 7.05L2.2 5.75L7.2 2.45ZM1.6 7.25L2.7 8L1.6 8.75V7.25ZM7.2 13.55L2.2 10.25L4.15 8.95L7.2 11V13.55ZM5.6 8L8 6.4L10.4 8L8 9.6L5.6 8ZM8.8 13.55V11L11.85 8.95L13.8 10.25L8.8 13.55ZM14.4 8.75L13.3 8L14.4 7.25V8.75Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>

              <li className="menu-socials__item">
                <a
                  title="GitHub"
                  href="https://github.com/develup-pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="menu-socials__link"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="c-icon menu-socials__icon c-icon--github menu-socials__icon--github"
                  >
                    <path
                      d="M8 0C3.58788 0 0 3.66144 0 8.17555C0 11.7868 2.27879 14.8464 5.47879 15.9498C5.86667 16 6.01212 15.7492 6.01212 15.5486C6.01212 15.348 6.01212 14.8464 6.01212 14.1442C3.78182 14.6458 3.29697 13.0408 3.29697 13.0408C2.95758 12.1379 2.42424 11.8871 2.42424 11.8871C1.69697 11.3856 2.47273 11.3856 2.47273 11.3856C3.29697 11.4357 3.68485 12.2382 3.68485 12.2382C4.41212 13.4922 5.57576 13.1411 6.01212 12.9404C6.06061 12.3887 6.30303 12.0376 6.49697 11.837C4.75152 11.5862 2.90909 10.884 2.90909 7.77429C2.90909 6.87147 3.2 6.16928 3.73333 5.5674C3.63636 5.36677 3.34545 4.51411 3.78182 3.41066C3.78182 3.41066 4.46061 3.21003 5.96364 4.26332C6.59394 4.0627 7.27273 4.01254 7.95152 4.01254C8.6303 4.01254 9.30909 4.11285 9.93939 4.26332C11.4424 3.21003 12.1212 3.41066 12.1212 3.41066C12.5576 4.51411 12.2667 5.36677 12.2182 5.5674C12.7515 6.11912 13.0424 6.87147 13.0424 7.77429C13.0424 10.9342 11.1515 11.6364 9.40606 11.837C9.69697 12.0878 9.93939 12.5893 9.93939 13.3417C9.93939 14.4451 9.93939 15.2978 9.93939 15.5987C9.93939 15.7994 10.0848 16.0502 10.4727 16C13.7212 14.8966 16 11.837 16 8.17555C16 3.66144 12.4121 0 8 0Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>

              <li className="menu-socials__item">
                <a
                  title="NPM"
                  href="https://www.npmjs.com/~develup-pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="menu-socials__link"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="c-icon menu-socials__icon c-icon--npm menu-socials__icon--npm"
                  >
                    <path
                      d="M0 0V32H32V0H0ZM26.6 26.6H21.2V10.6H16V26.6H5.4V5.4H26.6V26.6Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>

              <li className="menu-socials__item">
                <a
                  title="Instagram"
                  href="https://www.instagram.com/develuppro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="menu-socials__link"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="c-icon menu-socials__icon c-icon--instagram menu-socials__icon--instagram"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.6 0H4.4C2 0 0 2 0 4.4V11.55C0 14 2 16 4.4 16H11.55C14 16 15.95 14 15.95 11.6V4.4C16 2 14 0 11.6 0ZM11.6 14.6H4.4C2.75 14.6 1.4 13.25 1.4 11.6V4.4C1.4 2.75 2.75 1.4 4.4 1.4H11.55C13.2 1.4 14.55 2.75 14.55 4.4V11.55C14.6 13.25 13.25 14.6 11.6 14.6ZM8 3.9C5.75 3.9 3.9 5.75 3.9 8C3.9 10.25 5.75 12.1 8 12.1C10.25 12.1 12.1 10.25 12.1 8C12.1 5.75 10.25 3.9 8 3.9ZM8 10.7C6.5 10.7 5.3 9.5 5.3 8C5.3 6.5 6.5 5.3 8 5.3C9.5 5.3 10.7 6.5 10.7 8C10.7 9.5 9.5 10.7 8 10.7ZM12.3 2.65C12.05 2.65 11.75 2.75 11.55 2.95C11.35 3.15 11.25 3.4 11.25 3.7C11.25 3.95 11.35 4.25 11.55 4.45C11.75 4.65 12 4.75 12.3 4.75C12.55 4.75 12.85 4.65 13.05 4.45C13.25 4.25 13.35 4 13.35 3.7C13.35 3.45 13.25 3.15 13.05 2.95C12.85 2.8 12.55 2.65 12.3 2.65Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="menu-sided__copyright hidden-desktop">
            <span className="menu-sided__font">
              © 2012–2026 DEVELUP
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
