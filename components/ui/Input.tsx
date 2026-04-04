import type React from "react"
import { useState, forwardRef } from "react"
import { Eye, EyeOff } from "lucide-react"
import { cn } from "@/libs/tailwind"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  styleInput?: string
  styleLabel?: string
}

interface DropdownType extends React.InputHTMLAttributes<HTMLSelectElement> {
  label? : string
  options : string[]
  resize?: string
}

const Input = forwardRef<HTMLInputElement, Props>(
  function Input(
    { label, error, className, id, type = "text", styleInput, styleLabel, ...props },
    ref
  ) {
    const [focused, setFocused] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const isPassword = type === "password"

    return (
      <div className="w-full">
        <div
          className={cn(
            "w-full relative border rounded-md transition-all",
            error ? "border-red-500" : "border-gray-400",
            className
          )}
        >
          {/* label */}
          {label && (
            <label
              htmlFor={id}
              className={cn(
                "absolute bg-white px-[.5em] transition-all",
                focused || props.value
                    ? "left-2 -top-[.9em] text-[.7em]"
                    : "top-[1em] left-[.5em] text-[.81em] text-gray-400",
                styleLabel
              )}
            >
              {label}
            </label>
          )}

          {/* input */}
          <input
            ref={ref}
            id={id}
            type={
              isPassword
                ? showPassword
                  ? "text"
                  : "password"
                : type
            }
            {...props}
            className={cn(
              "w-full p-[.75em] focus:outline-none",
              isPassword ? "pr-[1em]" : "",
              styleInput
            )}
            onFocus={() => setFocused(true)}
            onBlur={(e) => {
              if (!e.target.value) setFocused(false)
              props.onBlur?.(e)
            }}
          /> 

          {isPassword && (
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          )}
        </div>

        {error && (
          <p className="text-red-500 text-sm mt-1">{error}</p>
        )}
      </div>
    )
  }
)

export default Input

export const Dropdown = ({label, options, className, resize, ...props}:DropdownType) => {
  return (
    <div className={cn(resize)}>
      <label htmlFor={props.id} className="block text-gray-600 mb-[.35em] text-[.75em]">
        {label}
      </label>
      <select {...props} className={cn("border border-gray-300 block w-full p-[.35em] rounded-lg text-[.75em]", className)}>
        {options.map((option) => {
          return <option key={option} value={option} className="text-[1em]">{option}</option>
        })}
      </select>
    </div>
  )
}

export const SelectDate = ({label, className, ...props}:Props) => {
  return (
    <div className={cn("mt-3", className)}>
      <label htmlFor={props.id}  className="block text-gray-600 mb-1 text-xs">
        {label || ''}
      </label>
      <input type="date" {...props} className={cn("border border-gray-300 block w-full p-1 rounded-lg text-xs", className)} />
    </div>
  )
}
