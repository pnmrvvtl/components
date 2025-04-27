import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';
import { colors } from '../../styles/colors';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonColor = keyof typeof colors;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  backgroundColor?: ButtonColor;
}

const variantClassMap: Record<ButtonVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
};

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, variant = 'primary', disabled, className, style, backgroundColor, ...rest } = props;

  return (
    <button
      className={clsx(
        styles.button,
        variantClassMap[variant],
        disabled && styles.disabled,
        className
      )}
      style={{
        backgroundColor: backgroundColor ? colors[backgroundColor] : undefined,
        ...style,
      }}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
