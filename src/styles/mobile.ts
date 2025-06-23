import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Screen breakpoints
const breakpoints = {
  small: 320,
  medium: 768,
  large: 1024,
};

// Scale factor based on screen width
const scale = width / 375; // Based on iPhone 8 as baseline

// Color palette matching web version
export const colors = {
  // Base colors
  primary: '#007AFF',
  secondary: '#5856D6',
  success: '#34C759',
  danger: '#FF3B30',
  warning: '#FF9500',
  info: '#5AC8FA',
  light: '#F2F2F7',
  dark: '#1C1C1E',
  
  // Theme colors
  background: {
    light: '#F9F9F9',
    dark: '#121212',
  },
  card: {
    light: '#FFFFFF',
    dark: '#1C1C1E',
  },
  text: {
    light: '#000000',
    dark: '#FFFFFF',
  },
  border: {
    light: '#E0E0E0',
    dark: '#38383A',
  },
  
  // Game specific colors
  queen: '#000000',
  cross: '#606060',
  clashing: '#FF3B30',
  regionColors: {
    red: '#FFCDD2',
    blue: '#BBDEFB',
    green: '#C8E6C9',
    yellow: '#FFF9C4',
    purple: '#E1BEE7',
    orange: '#FFE0B2',
    teal: '#B2DFDB',
    pink: '#F8BBD0',
  },
};

// Normalize sizes based on screen dimensions
export const normalize = (size: number): number => {
  return Math.round(size * scale);
};

// Responsive sizes
export const sizes = {
  iconSmall: normalize(18),
  iconMedium: normalize(24),
  iconLarge: normalize(32),
  
  borderRadius: normalize(8),
  borderWidth: 1,

  fontSizeSmall: normalize(12),
  fontSizeRegular: normalize(16),
  fontSizeLarge: normalize(20),
  fontSizeXL: normalize(24),
  fontSizeXXL: normalize(32),
  
  spacing: {
    xs: normalize(4),
    sm: normalize(8),
    md: normalize(16),
    lg: normalize(24),
    xl: normalize(32),
  },
};

// Calculate grid dimensions based on screen size
export const getGridSize = (boardSize: number): number => {
  const maxGridWidth = width * 0.9; // 90% of screen width
  return Math.floor(maxGridWidth / boardSize);
};

// Common styles across components
export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.light,
  },
  containerDark: {
    flex: 1,
    backgroundColor: colors.background.dark,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingVertical: sizes.spacing.sm,
    paddingHorizontal: sizes.spacing.md,
    borderRadius: sizes.borderRadius,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: normalize(80),
  },
  buttonText: {
    color: colors.text.dark,
    fontSize: sizes.fontSizeRegular,
    fontWeight: 'bold',
  },
  disabledButton: {
    opacity: 0.5,
  },
  cardContainer: {
    backgroundColor: colors.card.light,
    borderRadius: sizes.borderRadius,
    padding: sizes.spacing.md,
    margin: sizes.spacing.sm,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: sizes.fontSizeXL,
    fontWeight: 'bold',
    marginBottom: sizes.spacing.md,
    color: colors.text.light,
  },
  subtitle: {
    fontSize: sizes.fontSizeLarge,
    fontWeight: '500',
    marginBottom: sizes.spacing.sm,
    color: colors.text.light,
  },
  text: {
    fontSize: sizes.fontSizeRegular,
    color: colors.text.light,
  },
});

// Game specific styles
export const gameStyles = StyleSheet.create({
  board: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: sizes.spacing.sm,
    backgroundColor: colors.card.light,
    borderRadius: sizes.borderRadius,
    overflow: 'hidden',
    margin: sizes.spacing.md,
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: sizes.borderWidth,
    borderColor: colors.border.light,
  },
  queen: {
    fontSize: sizes.fontSizeXL,
    color: colors.queen,
    fontWeight: 'bold',
  },
  cross: {
    fontSize: sizes.fontSizeLarge,
    color: colors.cross,
    fontWeight: '500',
  },
  navigationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: sizes.spacing.md,
    paddingVertical: sizes.spacing.sm,
    marginBottom: sizes.spacing.md,
  },
  winScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  winCard: {
    backgroundColor: colors.card.light,
    padding: sizes.spacing.lg,
    borderRadius: sizes.borderRadius,
    alignItems: 'center',
    width: '80%',
    maxWidth: 400,
  },
  timerContainer: {
    alignSelf: 'flex-end',
    marginBottom: sizes.spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
  },
  timerText: {
    fontSize: sizes.fontSizeRegular,
    marginLeft: sizes.spacing.xs,
  },
});

export default {
  colors,
  sizes,
  normalize,
  commonStyles,
  gameStyles,
  getGridSize,
};
