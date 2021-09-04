import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import Perdidos from '../components/Listaanimaisperdidos'

const Stack = createStackNavigator();

function App({ navigation }) {
  return (
      <Stack.Navigator screenOptions={{
        headerTitleAlign: 'center',
      }}
      >
        <Stack.Screen 
        name="Animais Perdidos" 
        component={Perdidos}
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
