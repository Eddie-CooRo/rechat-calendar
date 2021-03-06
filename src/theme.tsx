import React from 'react';
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider
} from '@material-ui/core/styles';
import {} from '@material-ui/core/styles';

let theme = createMuiTheme({
  typography: {
    fontFamily: 'Barlow, Georgia, Times New Roman, Times, serif'
  },
  palette: {
    primary: {
      main: '#0945eb',
      light: '#dae3fc',
      dark: '#073ac7'
    },
    contrastThreshold: 3
  }
});
theme = responsiveFontSizes(theme);

type MuiThemeProviderProps = React.ComponentProps<typeof MuiThemeProvider>;
export const ThemeProvider: React.FC<
  Omit<MuiThemeProviderProps, 'theme'>
> = props => <MuiThemeProvider theme={theme} {...props}></MuiThemeProvider>;
