import { createDrawerNavigator } from '@react-navigation/drawer';
import { SCREENS } from '../constants/them';
import BottomNavigation from './BottomNavigation';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
    screenOptions={{headerShown:false,drawerType:'front'
    
    }}
    drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen name={SCREENS.BottomNavigation} component={BottomNavigation}  />
    </Drawer.Navigator>
  );
}