import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {themeColors} from '../theme';
import {useNavigation} from '@react-navigation/native';

const CartIcon = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 5,
        width: '96%',
        zIndex: 200,
        left: 7,
      }}>
      <TouchableOpacity
      onPress={()=> navigation.navigate("Cart")}
        style={{
          backgroundColor: themeColors.bgColor(1),
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 50,
          padding: 16,
          paddingVertical: 12,
          elevation: 4,
        }}>
        <View
          style={{
            padding: 8,
            paddingHorizontal: 16,
            borderRadius: 40,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
          }}>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 19}}>
            3
          </Text>
        </View>
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white',
            fontSize: 18,
          }}>
          View Cart
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>
          ${23}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;

const styles = StyleSheet.create({});
