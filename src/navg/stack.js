import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screen/auth/splash/Splash';
import Signup from '../screen/auth/signUp/SignUp';
import Login from '../screen/auth/Signin/signin';
import Home from '../screen/auth/home/Home';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Homes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
       name="Home"
       component={Home}
       options={{headerShown: false}}
       />
    </Stack.Navigator>
  );
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={Homes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;