import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import Alimentacao from '../components/Alimentacao'

const Stack = createStackNavigator();

function App({ navigation }) {
  return (
      <Stack.Navigator screenOptions={{
        headerTitleAlign: 'center',
      }}
      >
        <Stack.Screen 
        name="Pontos de Alimentação" 
        component={Alimentacao}
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
