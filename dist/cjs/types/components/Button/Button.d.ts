import React, { type ComponentPropsWithRef } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { buttonStyles } from './variants';
type ButtonElementProps = ComponentPropsWithRef<'button'>;
export interface ButtonProps extends ButtonElementProps, VariantProps<typeof buttonStyles> {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    label?: string;
}
export default function Button({ className, buttonType, size, rounded, label, rightIcon, spacing, leftIcon, ...props }: ButtonProps): React.JSX.Element;
export {};
