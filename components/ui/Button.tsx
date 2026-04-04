import { type LucideIcon } from "lucide-react";
import { cn } from "@/libs/tailwind";
import Link, { LinkProps } from "next/link";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  loading?: boolean;
}

export default function Button({
  label,
  loading = false,
  className = "",
  disabled,
  ...props
}: Props) {

  const isDisabled = loading || disabled;

  return (
    <button
      {...props}
      disabled={isDisabled}
      className={cn(
        "w-full bg-black text-white p-2 rounded-md flex items-center justify-center gap-2 transition-all duration-200  disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer  hover:bg-gray-800",
        className
      )}
    >
      {loading && (
        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
      )}

      <span className={loading ? "opacity-80" : ""}>
        { isDisabled 
          ? "Loading.."
          :  label
        }
      </span>
    </button>
  );
}

interface ButtonValue extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  lucideIcon: LucideIcon
  qty?:number
}

export const ButtonIcon = ({
  lucideIcon: Icon,
  className,
  qty = 0,
  ...props
}: ButtonValue) => {
  return (
    <button {...props}
      className={cn(
        "w-10 h-10 p-2.5 hover:bg-gray-100 cursor-pointer rounded-full relative",
        className
    )}>
      {qty > 0 && <span className="flex justify-center items-center bg-red-400 border-2 border-white w-5 h-5 text-white text-[9px] absolute font-bold -top-1 -right-1 rounded-2xl">{qty > 99 ? "99+" : qty}</span>}
      <Icon className="w-full h-full" />
    </button>
  )
}

interface ButtonGoValue extends LinkProps {
  label?: string
  lucideIcon?: LucideIcon
  className: string
  // title: string
}

export const ButtonGo = ({
  label,
  lucideIcon: Icon,
  href,
  className,
  ...props
}:ButtonGoValue) => {
  return (
    <Link {...props} href={href} className={cn(
      "py-2 px-3 text-sm bg-black hover:bg-gray-800 text-white rounded-2xl",
      className
    )}>
      {Icon && <Icon />}
      {label || ''}
    </Link>
  )
}