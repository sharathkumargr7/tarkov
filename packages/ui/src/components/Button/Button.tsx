import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

export interface ButtonProps extends MuiButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <MuiButton sx={{ backgroundColor: 'red' }} {...props}>{children}</MuiButton>;
}; 