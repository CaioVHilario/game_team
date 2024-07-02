import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { NewGroup } from 'src/Screens/NewGroup';
import { Players } from 'src/Screens/Players';
import { Groups } from 'src/Screens/Groups';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRouters() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='groups'
                component={Groups}
            />

            <Screen
                name='new'
                component={NewGroup}
            />

            <Screen
                name='players'
                component={Players}
            />
        </Navigator>
    );
}