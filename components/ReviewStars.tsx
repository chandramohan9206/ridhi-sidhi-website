import { FaStar } from "react-icons/fa";

export default function ReviewStars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} className="text-yellow-400" />
      ))}
    </div>
  );
}