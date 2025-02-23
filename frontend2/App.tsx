import Routes from './src/routes/index.routes';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { CultivoProvider } from './src/context/CulturaContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/context/AuthContext';
import SyncComponent from './src/components/syncComponent/syncComponent';

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <CultivoProvider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </CultivoProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
