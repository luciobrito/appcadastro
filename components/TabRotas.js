import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';

const Stack = createStackNavigator();

export default function TabRotas(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
}