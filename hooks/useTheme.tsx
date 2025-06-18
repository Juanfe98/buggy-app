import { useColorScheme } from 'react-native'
import { Colors, ThemeColors } from '@/constants/Colors'

/**
 * A simple hook that returns the correct color palette 
 * (light or dark) based on the OS setting.
 */
export default function useTheme(): ThemeColors {
  const colorScheme = useColorScheme() // 'light' | 'dark' | null
  // Fallback to 'light' if `useColorScheme()` returns null (e.g. older Android)
  return colorScheme === 'dark' ? Colors.dark : Colors.light
}
