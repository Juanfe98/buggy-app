import {
  DarkTheme as NavDark,
  DefaultTheme as NavLight
} from '@react-navigation/native'

export const LightNavTheme = {
  ...NavLight,
  colors: {
    ...NavLight.colors,
    primary:    '#4A90E2',
    background: '#F7F7F7',
    card:       '#FFFFFF',
    text:       '#212121',
    border:     '#E0E0E0',
    notification: '#D81B60',
  },
}

export const DarkNavTheme = {
  ...NavDark,
  colors: {
    ...NavDark.colors,
    primary:      '#64B5F6',
    background:   '#121212',
    card:         '#1E1E1E',
    text:         '#FFFFFF',
    border:       '#272727',
    notification: '#F48FB1',
  },
}
