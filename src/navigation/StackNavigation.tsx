import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ExploreScreen } from '../screens/explore';
import { COLORS } from '../theme/colors';
import { SearchScreen } from '../screens/search';

import type { StaticParamList } from '@react-navigation/native';

export type RootStackParamList = StaticParamList<typeof RootStack>;


const RootStack = createNativeStackNavigator({
  initialRouteName: 'Explore',
  screenOptions: {
    headerShown: false,

    contentStyle: {
      backgroundColor: COLORS.BACKGROUND.default,
    },

    animation: 'fade',
  },
  screens: {
    Explore: {
      screen: ExploreScreen,
      options: {
        contentStyle: {backgroundColor: COLORS.BACKGROUND.default}
      },

    },
    Search: {
      screen: SearchScreen,
      options: {
        contentStyle: {backgroundColor: COLORS.BACKGROUND.default}
      },

    },
  },
});

export const StackNavigation = createStaticNavigation(RootStack);