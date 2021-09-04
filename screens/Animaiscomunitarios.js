import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import Feed from '../components/Listaanimaiscomunitarios'

const Stack = createStackNavigator();

function App({ navigation }) {
  return (
      <Stack.Navigator screenOptions={{
        headerTitleAlign: 'center',
      }}
      >
        <Stack.Screen 
        name="Animais Comunitários"  
        component={Feed}
        options={{
          headerLeft: () => (
            <Icon.Button style={{marginLeft: 5,}}
            name="bars"
            color="black"
            backgroundColor="white"
            onPress={() => navigation.openDrawer()}  >
          </Icon.Button>        
          ),
        }} />
      </Stack.Navigator>
  );
}

export default App;
