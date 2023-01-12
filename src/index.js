import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {Provider} from 'react-redux';
import RootNavigator from './routes/root-navigator';
import {store} from './store';
import colors from './constants/colors';

function App() {
  return (
    <Provider store={store}>
      <>
        <SafeAreaView style={{flex: 1, backgroundColor: colors.primary}}>
          <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={0}>
            <NavigationContainer>
              <RootNavigator />
            </NavigationContainer>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </>
    </Provider>
  );
}

export default App;
