
type ArrowDownProps = {
  className?: string;
};

export default function ArrowUp({ className = "" }: ArrowDownProps) {
  return (
    <div className={`arrow-down ${className}`}>
      <span className="arrow-down__right" />
    </div>
  );
}
