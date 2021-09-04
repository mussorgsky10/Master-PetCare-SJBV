import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Component } from 'react';
import { WebView } from 'react-native-webview';

class Formulario extends Component {
  render() {
    return (
      <WebView
        source={{
          uri: 'https://docs.google.com/forms/d/e/1FAIpQLSc-kvkEK2PZ9L_rmUp1TUBmPatNYOH917yymIxaddeSPC63_g/viewform'
        }}
        style={{ marginTop: 20 }}
      />
    );
  }
};

const Stack = createStackNavigator();

function App({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Microchipagem e Castração" screenOptions={{
      headerTitleAlign: 'left',
    }}>
      <Stack.Screen name="Microchipagem e Castração" component={Formulario}
        options={{
          headerLeft: () => (
            <Icon.Button style={{ marginLeft: 5, }}
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

const styles = StyleSheet.create ({
  scrollView: {
    backgroundColor: "#0e101c",
  },
  label: {
    color: "white",
    margin: 20,
    marginLeft: 0,
  },
  button: {
    margin: 40,
    backgroundColor:"#0e101c",
    height: 40,
    borderRadius: 8,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 0,
    padding: 8,
  },
  input: {
    backgroundColor: "white",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },

});

export default App;
