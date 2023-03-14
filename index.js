/**
 * @format
 */
<script src="http://localhost:8097"></script>;
import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';

if (__DEV__
    // || __QA__
) {
    import('./ReactotronConfig').then(() =>
        AppRegistry.registerComponent(appName, () => App)
    );
} else {
    // import('./ReactotronConfig').then(() =>
    AppRegistry.registerComponent(appName, () => App)
    // );
}
