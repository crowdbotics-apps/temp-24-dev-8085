import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen39362Navigator from '../features/CopyOfBlankScreen39362/navigator';
import BlankScreen19319Navigator from '../features/BlankScreen19319/navigator';
import BlankScreen29318Navigator from '../features/BlankScreen29318/navigator';
import BlankScreen39317Navigator from '../features/BlankScreen39317/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen39362: { screen: CopyOfBlankScreen39362Navigator },
BlankScreen19319: { screen: BlankScreen19319Navigator },
BlankScreen29318: { screen: BlankScreen29318Navigator },
BlankScreen39317: { screen: BlankScreen39317Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
