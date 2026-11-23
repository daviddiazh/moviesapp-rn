
import { COLORS } from './colors';

export const TYPOGRAPHY = {
  h1: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.TEXT.primary,
  },
  h2: {
    fontSize: 22,
    fontWeight: '600',
    color: COLORS.TEXT.primary,
  },
  h3: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.TEXT.primary,
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.TEXT.primary,
  },
  secondary: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.TEXT.secondary,
  },
  caption: {
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.TEXT.tertiary,
  },
} as const;
