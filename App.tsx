import { StatusBar, StyleSheet, Text, View } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView
} from 'react-native-safe-area-context';
import { GLOBAL_STYLES } from './src/theme/globalStyles';
import { TYPOGRAPHY } from './src/theme/typography';

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
      <SafeAreaView>
        <Text style={TYPOGRAPHY.h1}>
          Explore
        </Text>
      </SafeAreaView>
    </View>
  );
}

export default App;
