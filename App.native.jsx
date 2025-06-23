import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { I18nextProvider } from 'react-i18next';

// Import i18n configuration
import i18n from './src/i18n';

// Import mobile-specific components
import MobileLevelSelection from './src/components/mobile/LevelSelection';
import MobileLevel from './src/components/mobile/Level';
import MobileBonusLevelsList from './src/components/mobile/BonusLevelsList';
import MobileBonusLevel from './src/components/mobile/BonusLevel';
import MobileCommunityLevelsList from './src/components/mobile/CommunityLevelsList';
import MobileCommunityLevel from './src/components/mobile/CommunityLevel';
import MobileLevelBuilder from './src/components/mobile/LevelBuilder';
import MobileNotFound from './src/components/mobile/NotFound';

// Create stack navigator
const Stack = createNativeStackNavigator();

// Define theme
const theme = {
  dark: false,
  colors: {
    primary: '#007AFF',
    background: '#F9F9F9',
    card: '#FFFFFF',
    text: '#000000',
    border: '#E0E0E0',
    notification: '#FF3B30',
  },
};

const darkTheme = {
  dark: true,
  colors: {
    primary: '#0A84FF',
    background: '#121212',
    card: '#1C1C1E',
    text: '#FFFFFF',
    border: '#38383A',
    notification: '#FF453A',
  },
};

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider value={theme}>
            <NavigationContainer>
              <StatusBar barStyle="dark-content" />
              <Stack.Navigator initialRouteName="LevelSelection">
                <Stack.Screen name="LevelSelection" component={MobileLevelSelection} options={{ title: 'Queens Game' }} />
                <Stack.Screen name="Level" component={MobileLevel} options={({ route }) => ({ title: `Level ${route.params?.id}` })} />
                <Stack.Screen name="BonusLevelsList" component={MobileBonusLevelsList} options={{ title: 'Bonus Levels' }} />
                <Stack.Screen name="BonusLevel" component={MobileBonusLevel} options={({ route }) => ({ title: `Bonus ${route.params?.id}` })} />
                <Stack.Screen name="CommunityLevelsList" component={MobileCommunityLevelsList} options={{ title: 'Community Levels' }} />
                <Stack.Screen name="CommunityLevel" component={MobileCommunityLevel} options={({ route }) => ({ title: `Community Level ${route.params?.id}` })} />
                <Stack.Screen name="LevelBuilder" component={MobileLevelBuilder} options={{ title: 'Level Builder' }} />
                <Stack.Screen name="NotFound" component={MobileNotFound} options={{ title: 'Page Not Found' }} />
              </Stack.Navigator>
            </NavigationContainer>
          </ThemeProvider>
        </I18nextProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default App;
