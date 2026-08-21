"use client";


const socials = [
  {
    name: "@wolf.23.fe",
    href: "https://instagram.com/wolf.23.fe",
    socialName:"Instagram"
  },
  {
    name: "/wolf.23.fe",
    href: "https://facebook.com/wolf.23.fe",
    socialName:"Facebook"
  },
  {
    name: "+591 44231234",
    href: "https://wa.me/5912344123423",
    socialName:"Whatsap"
  },
  {
    name: "tikoko",
    href: "https://wa.me/5912344123423",
    socialName:"TikTok"
  },
];

export default function SocialLinks() {
  return (
    <div className="socialLinks">
      {socials.map((social) => {

        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="socialLinks__item"
          >

      <div className="process-step__descriptionCts">
    <span className="oiesfse carouselDiseno__itemCts  ">
        <div className="BtCntsBase ">
            <div className="BtCntsBaseL">




      <blockquote className="process-section__caption process-section__caption--top">
        <div className="hidden-mobile hidden-tablet process-section__prime-text-wrapper rtieou">
          <div>
            <span className="process-section__font process-section__font--caption fiiiow">
              <span
                className="animated words lines splitting"
                style={{ opacity: 1 }}
              >
                <span
                  className="word words chars splitting"
                  data-word={social.socialName}
                >
            {social.socialName}:
                </span>
              </span>
            </span>
          </div>
        </div>
      </blockquote>



                </div><div className="BtCntsBaseR"> 

      <blockquote className="process-section__caption process-section__caption--top">
        <div className="hidden-mobile hidden-tablet process-section__prime-text-wrapper rtieou">
          <div>
            <span className="process-section__font process-section__font--caption fiiiow">
              <span
                className="animated words lines splitting"
                style={{ opacity: 1 }}
              >
                <span
                  className="word words chars splitting"
                  data-word={social.name}
                >
            {social.name}
                </span>
              </span>
            </span>
          </div>
        </div>
      </blockquote>

                </div>
        </div>
    </span>
      </div>
          </a>
        );
      })}
    </div>
  );
}
