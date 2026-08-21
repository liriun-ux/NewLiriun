interface ProcessCaptionProps {
  texto1: string;
  texto2: string;
  className?:string;
}

export default function ProcessCaption({
  texto1,
  texto2,
  className,
}: ProcessCaptionProps) {
  return (
    <div
      className={`process-section__caption-wrapper  `}
      style={{ textAlign: "left" }}
    >
      <blockquote className={`process-section__caption process-section__caption--top ${className} `}>
        <div className="hidden-mobile hidden-tablet process-section__prime-text-wrapper rtieou">
          <div>
            <span className="process-section__font process-section__font--caption fiiiow">
              <span
                className="animated words lines splitting"
                style={{ opacity: 1 }}
              >
                <span
                  className="word words chars splitting"
                  data-word={texto1}
                  style={{
                    "--word-index": 0,
                    "--line-index": 0,
                    "--word-total": 1,
                    "--char-total": texto1.length,
                  } as React.CSSProperties}
                >
                  {texto1}
                </span>
              </span>
            </span>
          </div>
        </div>
      </blockquote>

      <blockquote className="process-section__caption process-section__caption--bottom text-[#aeaeb0]">
        <span className="hidden-tablet hidden-mobile process-section__font process-section__font--muted fiiiow">
          <span
            className="animated words lines splitting"
            style={{ opacity: 1 }}
          >
            <span
              className="word words chars splitting"
              data-word={texto2}
              style={{
                "--word-index": 0,
                "--line-index": 0,
                "--word-total": 1,
                "--char-total": texto2.length,
              } as React.CSSProperties}
            >
              {texto2}
            </span>
          </span>

          <br className="hidden-mobile hidden-tablet" />
        </span>
      </blockquote>
    </div>
  );
}
