import {StyleSheet, Text, Image, View,TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';


const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    },3000);
  }, []);
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("Delivery")}
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../assets/images/delivery1.gif')}
        style={{height: 320, width: 320}}
      />
     
    </TouchableOpacity>
  );
};

export default PreparingOrderScreen;

const styles = StyleSheet.create({});
