import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SipCalculator from './screens/SipCalculator';
import LumpsumCalculator from './screens/LumpsumCalculator';
import CAGRCalulator from './screens/CAGRCalculator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Finance Calculator', headerTitleStyle: {
          fontWeight:'bold', fontSize: 22
        },
        headerTitleAlign: 'center',
        headerTintColor: '#FBEEC1',
        headerStyle: { backgroundColor: '#4d3227', elevation: null, shadowOpacity: 0.9
        }}}/>
        <Stack.Screen name="SipCalculator" component={SipCalculator} options={{title: 'SIP Calculator', headerTitleStyle: {
          fontWeight:'bold', fontSize: 22
        },
        headerTitleAlign: 'center',
        headerTintColor: '#FBEEC1',
        headerStyle: { backgroundColor: '#4d3227', elevation: null, shadowOpacity: 0.9
        }}}/>
        <Stack.Screen name="LumpsumCalculator" component={LumpsumCalculator} options={{title: 'Lumpsum Calculator', headerTitleStyle: {
          fontWeight:'bold', fontSize: 22
        },
        headerTitleAlign: 'center',
        headerTintColor: '#FBEEC1',
        headerStyle: { backgroundColor: '#4d3227', elevation: null, shadowOpacity: 0.9
        }}}/>
        <Stack.Screen name="CAGRCalculator" component={CAGRCalulator} options={{title: 'CAGR Calculator', headerTitleStyle: {
          fontWeight:'bold', fontSize: 22
        },
        headerTitleAlign: 'center',
        headerTintColor: '#FBEEC1',
        headerStyle: { backgroundColor: '#4d3227', elevation: null, shadowOpacity: 0.9
        }}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
