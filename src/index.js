import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  SafeAreaView,
  LogBox,
} from 'react-native';
import { Provider } from 'react-redux';
import RootNavigator from './routes/root-navigator';
import { store } from './store';
import colors from './constants/colors';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
LogBox.ignoreLogs([
  'Warning: Each child in a list should have a unique "key" prop',
]);
LogBox.ignoreLogs([
  "Warning: Failed prop type: Invalid props.style key `elevation` supplied to `Image`.",
]);
LogBox.ignoreLogs([
  "VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality",
]);
LogBox.ignoreLogs([
  "VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.",
]);
LogBox.ignoreLogs([
  "`flexWrap: `wrap`` is not supported with the `VirtualizedList` components.Consider using `numColumns` with `FlatList` instead.",
]);
LogBox.ignoreAllLogs("Warning: Each child in a list should have a unique `key` prop.")
function App() {
  return (
    <Provider store={store}>
      <>
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
          <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />
          <KeyboardAvoidingView
            style={{ flex: 1 }}
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
