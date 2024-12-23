import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import styles from './Button.module.scss';

export interface ButtonProps extends MuiButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className,
  variant = 'contained',
  ...props 
}) => {
  // Map variant to class name
  const variantClass = {
    contained: styles.primary,
    outlined: styles.secondary,
    text: styles.text
  }[variant];

  const buttonClass = `${styles.button} ${variantClass} ${className || ''}`;
  
  return (
    <MuiButton 
      className={buttonClass}
      variant={variant}
      {...props}
    >
      {children}
    </MuiButton>
  );
}; 