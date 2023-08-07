import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigation from './src/AppNavigation'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'


const r = () => {
  return (
    <Provider store={store}>
    <AppNavigation/>
    </Provider>
  )
}

export default r

const styles = StyleSheet.create({})