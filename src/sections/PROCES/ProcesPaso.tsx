
"use client"
interface PProcessStepProps {
  title: string;
  description: string;
}

export default function PProcessStep({
  title,
  description,
}: PProcessStepProps) {
  return (
    <div className="process-step Aprocess-section__grid-block hidden-mobile hidden-tablet process-section__grid-block--step1">

      <div className="process-step__title rgeacww">
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

      <div className="process-step__description HePrt">
        <span className="process-step__font process-step__font--description">
          {description}
        </span>
      </div>

    </div>
  );
}
