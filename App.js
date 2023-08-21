import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppContacts from './src/pages/AppContacts';
import Contacts from './src/pages/Contacts'
import Information from './src/pages/Information'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen
      name="AppContacts"
      component={AppContacts}
      />
      <Tab.Screen
      name="Contacts"
      component={Contacts}
      />
    </Tab.Navigator>
  )
}

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="AppContacts"
        component={Tabs}
        />
        <Stack.Screen
        name="Information"
        component={Information}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}