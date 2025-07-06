import { useColorScheme } from 'react-native';
import { Colors, palette, ThemeColors } from '@/constants/Colors';

interface AppColors {
  theme: ThemeColors;
  palette: string[];
}
/**
 * A simple hook that returns the correct color palette
 * (light or dark) based on the OS setting.
 */
export default function useTheme(): AppColors {
  const colorScheme = useColorScheme(); // 'light' | 'dark' | null
  // Fallback to 'light' if `useColorScheme()` returns null (e.g. older Android)
  return {
    theme: colorScheme === 'dark' ? Colors.dark : Colors.light,
    palette: palette,
  };
}
