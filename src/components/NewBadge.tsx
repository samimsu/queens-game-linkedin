interface NewBadgeProps {
  className?: string;
}

const NewBadge = ({ className = "" }: NewBadgeProps) => {
  return (
    <div
      className={`rounded bg-yellow-500 text-white px-1 text-xs ${className}`}
    >
      New
    </div>
  );
};

export default NewBadge;
