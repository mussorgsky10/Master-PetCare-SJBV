import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import Notificacoes from '../components/Listanotificacoes';

const Stack = createStackNavigator();

function App({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Notificações" screenOptions={{
      headerTitleAlign: 'center',
    }}>
      <Stack.Screen name="Notificações" component={Notificacoes}
        options={{
          headerLeft: () => (
            <Icon.Button style={{marginLeft: 5,}}
              name="bars"
              color="black"
              backgroundColor="white"
              onPress={() => navigation.openDrawer()}  >
            </Icon.Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default App;
