/**
 * @format
 */
<script src="http://localhost:8097"></script>;
import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';

if (__DEV__) {
  import('./ReactotronConfig').then(() =>
    AppRegistry.registerComponent(appName, () => App),
  );
} else {
  AppRegistry.registerComponent(appName, () => App);
}
