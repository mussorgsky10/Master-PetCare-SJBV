import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import Adocao from '../components/Listaadocao' 

const Stack = createStackNavigator();

function App({ navigation }) {
  return (
      <Stack.Navigator screenOptions={{
        headerTitleAlign: 'center',
      }}
      >
        <Stack.Screen 
        name="Animais para Adoção" 
        component={Adocao}
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
