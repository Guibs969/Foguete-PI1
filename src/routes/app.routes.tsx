import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';

import { LaunchDetails } from '../screens/LaunchDetails';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen 
                name='Home'
                component={Home}
            />

            <Screen
                name='LaunchDetails'
                component={LaunchDetails}
            />
        </Navigator>
    )
}
