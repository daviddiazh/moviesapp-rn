import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { SPACING } from '../../theme/spacing';

export const BOX_HEIGHT = 40;

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  box: {
    backgroundColor: COLORS.BACKGROUND.surface,
    height: BOX_HEIGHT,
    borderRadius: BOX_HEIGHT / 2,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    paddingHorizontal: 10,
  },
  card: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    gap: SPACING.MD,
    paddingBottom: SPACING.MD,
  },
  ratingContainer: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    gap: SPACING.SM,
  }
});