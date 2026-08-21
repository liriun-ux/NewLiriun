type ArrowDownProps = {
  className?: string;
};

export default function ArrowDown({ className = "" }: ArrowDownProps) {
  return (
    <div className={`arrow-down ${className}`}>
      <span className="arrow-down__left" />
    </div>
  );
}
