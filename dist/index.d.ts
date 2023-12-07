import React, { ComponentPropsWithRef } from 'react';
import { VariantProps } from 'class-variance-authority';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';

/**
 * Button styles for the Button component.
 */
declare const buttonStyles: (props?: ({
    buttonType?: "primary" | "secondary" | "warning" | "outline" | "disabled" | "error" | null | undefined;
    size?: "default" | "small" | "large" | "xxl" | null | undefined;
    spacing?: "default" | "small" | "large" | "xxl" | null | undefined;
    rounded?: "default" | "xxl" | "sm" | "lg" | "xl" | "none" | "full" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;

type ButtonElementProps = ComponentPropsWithRef<'button'>;
interface ButtonProps extends ButtonElementProps, VariantProps<typeof buttonStyles> {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    label?: string;
}

export type { ButtonProps };
