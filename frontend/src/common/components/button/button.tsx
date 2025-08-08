// ButtonAction.tsx
import React from 'react';
import { createTheme, ThemeProvider, type PaletteColorOptions } from '@mui/material/styles';
import { Button, type SvgIconProps } from '@mui/material';


declare module '@mui/material/styles' {
  interface Palette {
    navy: Palette['primary'];
  }
  interface PaletteOptions {
    navy?: PaletteColorOptions;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    navy: true;
  }
}

type ButtonProps = {
  onClick: () => void;
  label: string;
  isLoading?: boolean;
  color?: 'navy' | 'primary' | 'secondary';
  icon?: React.ReactElement<SvgIconProps>;
};


const theme = createTheme({
  palette: {
    navy: {
      main: '#001F54', 
      light: '#3C4E77',
      dark: '#000e2c',
      contrastText: '#ffffff', 
    },
  },
});

const ButtonAction = (props: ButtonProps) => {
  const {
    onClick,
    label,
    color = 'navy',
    icon,
    isLoading = false,
  } = props;

  return (
    <ThemeProvider theme={theme}>
      <Button
        color={color}
        onClick={onClick}
        loading={isLoading}
        loadingPosition="start"
        startIcon={icon}
        variant="contained"
        sx={{
          textTransform: 'none',
          px: 3,
          py: 1,
          fontWeight: 'bold',
        }}
      >
        {label}
      </Button>
    </ThemeProvider>
  );
};

export default ButtonAction;
