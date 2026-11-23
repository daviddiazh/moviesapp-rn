
import { StyleSheet } from 'react-native';
import { COLORS } from './colors';
import { SPACING } from './spacing';

export const GLOBAL_STYLES = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND.default,
  },

  container: {
    flex: 1,
    paddingHorizontal: SPACING.MD,
  },

  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  card: {
    backgroundColor: COLORS.BACKGROUND.surface,
    borderRadius: 12,
    padding: SPACING.MD,
  },

  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.BACKGROUND.border,
  },

  fullWidth: {
    width: '100%',
  },
});
