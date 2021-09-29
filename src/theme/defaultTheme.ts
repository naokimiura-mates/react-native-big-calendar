import { Appearance } from 'react-native'

import { ThemeInterface } from './ThemeInterface'

export const isDark = Appearance.getColorScheme() === 'dark'
export const defaultTheme: ThemeInterface = {
  isRTL: false,
  palette: {
    primary: {
      main: 'rgb(66, 133, 244)',
      contrastText: '#fff',
    },
    nowIndicator: 'red',
    gray: {
      // 50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      // 400: '#bdbdbd',
      500: isDark ? '#f5f5f5' : '#9e9e9e',
      // 600: '#757575',
      // 700: '#616161',
      800: isDark ? '#f5f5f5' : '#424242',
      // 900: '#212121',
    },
  },
  eventCellOverlappings: [
    { main: '#E26245', contrastText: '#f5f5f5' }, // orange
    { main: '#4AC001', contrastText: '#fff' }, // green
    { main: '#5934C7', contrastText: '#fff' }, // purple
  ],
  typography: {
    xs: {
      fontSize: 10,
    },
    sm: {
      fontSize: 12,
    },
    xl: {
      fontSize: 22,
    },
  },
}
