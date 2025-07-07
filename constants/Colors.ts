const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  error: string;
  success: string;
  warning: string;
  disabled: string;
  tint: string;
}

// A sample Light Theme palette
export const light: ThemeColors = {
  primary: '#4A90E2', // a pleasant medium‐blue
  secondary: '#D81B60', // a striking magenta accent
  background: '#F7F7F7', // very light gray
  surface: '#FFFFFF', // pure white cards/sheets
  text: '#212121', // nearly black, high contrast on white
  textSecondary: '#666666', // mid‐gray for subheadings
  border: '#E0E0E0', // light gray border
  error: '#E53935', // red
  success: '#43A047', // green
  warning: '#FB8C00', // orange
  disabled: '#BDBDBD', // light gray for disabled
  tint: tintColorLight,
};

// A sample Dark Theme palette
export const dark: ThemeColors = {
  primary: '#64B5F6', // lighter blue for dark backgrounds
  secondary: '#F48FB1', // lighter accent
  background: '#121212', // near‐black background
  surface: '#1E1E1E', // dark gray for cards/sheets
  text: '#FFFFFF', // white text on dark surfaces
  textSecondary: '#A0A0A0', // light‐gray for secondary text
  border: '#272727', // slightly lighter than surface
  error: '#EF5350', // red
  success: '#66BB6A', // green
  warning: '#FFA726', // orange
  disabled: '#555555', // gray for disabled controls
  tint: tintColorDark,
};

/**
 * Brand color swatches for the group‐icon picker.
 * Consumed by ColorGrid in the CreateGroupScreen bottom sheet.
 */
export const palette = [
  '#007AFF', // primary
  '#FF9500', // secondary
  '#34C759', // success
  '#FF3B30', // error
  '#FFD54F',
  '#81C784',
  '#64B5F6',
  '#BA68F8',
  '#BA68D2',
  '#BA68A9',
];

// A small helper to pick the right theme
export const Colors = { light, dark, palette };
