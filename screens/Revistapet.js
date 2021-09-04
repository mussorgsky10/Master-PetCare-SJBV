import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import Noticias from '../components/Listanoticias';

const Stack = createStackNavigator();

function App({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Revista" screenOptions={{
        headerTitleAlign: 'center',
      }}>
        <Stack.Screen name="Revista Pet" component={Noticias} 
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
