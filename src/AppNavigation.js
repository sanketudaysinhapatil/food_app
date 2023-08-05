import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import RestaurantScreen from './screens/RestaurantScreen'
import CartScreen from './screens/CartScreen'
import PreparingOrderScreen from './screens/PreparingOrderScreen'
import Delivery from './screens/Delivery'

const Stack  = createNativeStackNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name= "Home" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name= "Restaurant" component={RestaurantScreen} options={{headerShown:false}}/>
            <Stack.Screen name= "Cart" component={CartScreen} options={{ presentation: 'modal', headerShown: false }}/>
            <Stack.Screen name="PreparingOrder" options={{ presentation: 'fullScreenModal', headerShown: false }} component={PreparingOrderScreen} />
            <Stack.Screen name="Delivery" options={{ presentation: 'fullScreenModal', headerShown: false }} component={Delivery} />



        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})