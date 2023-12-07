import React, { type ComponentPropsWithRef } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { buttonStyles } from './variants';

type ButtonElementProps = ComponentPropsWithRef<'button'>;


export interface ButtonProps
  extends Omit<ButtonElementProps, 'color'>,
    VariantProps<typeof buttonStyles> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  label?: string;
}