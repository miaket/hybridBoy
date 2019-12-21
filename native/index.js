/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Root from '../src/components/registrations/Root';
import { names } from './app.json';

AppRegistry.registerComponent(names.root, () => Root);
