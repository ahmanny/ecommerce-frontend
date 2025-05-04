import { Inbox } from "lucide-react";
import { MdArrowForward } from "react-icons/md";

interface EmptyStateProps {
  message: string;
  subtitle?: string;
  btnText?: string;
  action?: () => void;
}

export default function EmptyState({
  action,
  subtitle,
  message = "No items found",
  btnText,
}: EmptyStateProps) {
  return (
    <div className="w-full first:h-[304px] flex justify-center items-center ">
      <div className="flex flex-col justify-center items-center gap-4 w-[300px]">
        <Inbox className="w-16 h-16  mb-2 text-[#5C5F6A]" />
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="heading_2 text-gray-600">{message}</h3>
          <p className="text-sm text-gray-400">{subtitle}</p>
        </div>
        {action && (
          <button
            type="button"
            onClick={action}
            className="btn flex gap-2 !w-1/2"
          >
            <span>{btnText}</span>
            <MdArrowForward className="text-2xl" />
          </button>
        )}
      </div>
    </div>
  );
}
