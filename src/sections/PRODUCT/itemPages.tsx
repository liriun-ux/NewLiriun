"use client"
interface ProcessStepProps {
  title: string;
  description: string;
}

export default function ProcessStep({
  title,
  description,
}: ProcessStepProps) {
  return (
    <div className="process-step process-section__grid-block hidden-mobile hidden-tablet process-section__grid-block--step1">

      <div className="process-step__title">
        <span className="process-step__font process-step__font--title">
          {title}
        </span>
      </div>

      <div className="process-step__vertical-border">
        <div className="process-step__vertical-inner-border"></div>
      </div>

      <div className="process-step__horizontal-border">
        <div className="process-step__horizontal-inner-border"></div>
      </div>

      <div className="process-step__description">
        <span className="process-step__font process-step__font--description">
          {description}
        </span>
      </div>

    </div>
  );
}
