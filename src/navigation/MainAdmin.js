import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdminHome from '../components/AdminHome';
import AddItems from '../components/AddItems';
import AdminAccount from '../components/AdminAccount';

const Tab = createBottomTabNavigator();

export default function MainAdmin() {
    return (
        <Tab.Navigator>
            <Tab.Screen options={{ headerShown: false }} name="AdminHome" component={AdminHome} />
            <Tab.Screen options={{ headerShown: false }} name="AddItems" component={AddItems} />
            <Tab.Screen options={{ headerShown: false }} name="AdminAccount" component={AdminAccount} />
        </Tab.Navigator>
    );
}