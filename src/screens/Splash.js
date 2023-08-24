import {StyleSheet, Text, Image, View, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';
import { GlobalStyles } from '../globalstyles/GlobalStyles';
const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 4000);
  });

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/sp.jpeg')} style={styles.logo} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e33844',
  },
  logo: {
    width: GlobalStyles.fullHeight*0.7,
    height: GlobalStyles.fullWidth*0.8,
    objectFit: 'contain',
  },
});
