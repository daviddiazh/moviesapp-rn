import { StatusBar, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { GLOBAL_STYLES } from './src/theme/globalStyles';
import { StackNavigation } from './src/navigation/StackNavigation';
import { ExploreProvider } from './src/context/ExploreContext';

function App() {
  const isDarkMode = true;

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <View style={[GLOBAL_STYLES.screen, GLOBAL_STYLES.container]}>
      <ExploreProvider>
        <StackNavigation />
      </ExploreProvider>
    </View>
  );
}

export default App;
