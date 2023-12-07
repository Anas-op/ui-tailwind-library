import { clsxMerge } from '../../common/utils/classNameUtils';
import { ButtonProps } from './Button.types';
import { buttonStyles } from './variants';


export default function Button({
  className,
  buttonType,
  color,
  size,
  rounded,
  label,
  rightIcon,
  spacing,
  leftIcon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsxMerge(
        buttonStyles({ buttonType, color, size, rounded, spacing }),
        className
      )}
      type="button"
      {...props}
    >
      {Boolean(leftIcon) && leftIcon}
      {Boolean(label) && label}
      {Boolean(rightIcon) && rightIcon}
    </button>
  );
}