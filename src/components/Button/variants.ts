import { cva } from "class-variance-authority";

/**
 * Button styles for the Button component.
 */
export const buttonStyles = cva(
  "flex flex-row gap-x-4 disabled:cursor-not-allowed items-center justify-center",
  {
    variants: {
      buttonType: {
        primary:
          "border-violet-500 hover:bg-opacity-75",
        secondary:
          "border-gray-200 hover:bg-gray-300",
        warning:
          "border-yellow-500 hover:bg-yellow-600",
        outline:
          "bg-white text-gray-600 hover:bg-gray-100 border hover:border-gray-100 border-gray-300 hover:shadow-md",
        disabled: "bg-black text-white border-black cursor-not-allowed",
        error: "bg-red-500 text-white border-red-500 hover:bg-red-600",
      },
      color: {
        default: ["text-white", "bg-black", "border-black"],
        black: ["text-white", "bg-black", "border-black"],
        white: ["text-black", "bg-white", "border-white"],
        gray: ["text-gray-500", "bg-gray-200", "border-gray-500"],
        red: ["text-red-500", "bg-red-200", "border-red-500"],
        yellow: ["text-yellow-500", "bg-yellow-200", "border-yellow-500"],
        green: ["text-green-500", "bg-green-200", "border-green-500"],
        blue: ["text-blue-500", "bg-blue-200", "border-blue-500"],
        indigo: ["text-indigo-500", "bg-indigo-200", "border-indigo-500"],
        purple: ["text-purple-500", "bg-purple-200", "border-purple-500"],
        pink: ["text-pink-500", "bg-pink-200", "border-pink-500"],
        teal: ["text-teal-500", "bg-teal-200", "border-teal-500"],
        orange: ["text-orange-500", "bg-orange-200", "border-orange-500"],
      },
      size: {
        default: ["text-base"],
        small: ["text-sm"],
        large: ["text-lg"],
        xxl: ["text-2xl"],
      },
      spacing: {
        default: ["py-2", "px-4"],
        small: ["py-1", "px-2"],
        large: ["py-3", "px-6"],
        xxl: ["py-4", "px-8"],
      },
      rounded: {
        default: "rounded-md",
        sm: "rounded-sm",
        lg: "rounded-lg",
        xl: "rounded-xl",
        xxl: "rounded-2xl",
        none: "rounded-none",
        full: "rounded-full",
      },
    },
    compoundVariants: [
      {
        buttonType: "primary",
        size: "default",
        color: "default",
        spacing: "default",
        rounded: "default",
      },
    ],
    defaultVariants: {
      buttonType: "primary",
      size: "default",
      color: "default",
      rounded: "default",
      spacing: "default",
    },
  }
);
