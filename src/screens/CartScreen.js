import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {featured} from '../constants';
import {themeColors} from '../theme';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from "react-redux"
import { selectResturant } from '../redux/restaurentSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../redux/basketSlice';
const deliveryFee = 2
const CartScreen = () => {
  const [groupedItem , setGroupedItems ] = useState({})
  const restaurant = useSelector(selectResturant)
  const navigation = useNavigation();
const cartItems = useSelector(selectBasketItems)
  const carttotal = useSelector(selectBasketTotal)
  const dispatch = useDispatch()
  
useEffect(()=>{
  const items = cartItems.reduce((group,item )=>{
    if (group[item.id]){
      group[item.id].push(item)
    }else{
      group[item.id]= [item]
    }
    return group
  },{})
  setGroupedItems(items)

},[cartItems])

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* back butto  */}

      <View style={{position: 'relative', paddingVertical: 16, elevation: 3}}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            backgroundColor: themeColors.bgColor(1),
            zIndex: 10,
            borderRadius: 30,
            padding: 1,
            top: 10,
            left: 10,
            padding: 10,
          }}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/icons/left.png')}
            style={{height: 20, width: 20}}
            tintColor="white"
          />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 21,
            }}>
            Your Cart
          </Text>
          <Text style={{textAlign: 'center', color: 'gray'}}>
            {restaurant.name}
          </Text>
        </View>
      </View>

      {/* delivery time  */}

      <View
        style={{
          backgroundColor: themeColors.bgColor(0.2),
          flexDirection: 'row',
          paddingHorizontal: 16,
          alignItems: 'center',
        }}>
        <Image
          style={{width: 80, height: 80}}
          source={require('../assets/images/b3.png')}
        />
        <Text style={{flex: 1, paddingLeft: 16, color: 'black'}}>
          Deliver in 20-30 minutes
        </Text>
        <TouchableOpacity>
          <Text style={{fontWeight: 'bold', color: themeColors.text}}>
            Change
          </Text>
        </TouchableOpacity>
      </View>

      {/* dishes  */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
          backgroundColor: 'white',
          paddingTop: 20,
        }}>
        {Object.entries(groupedItem).map(([key, items]) => {
          let dish = items[0]
          return (
            <View
              key={key}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 12,
                paddingVertical: 8,
                paddingHorizontal: 16,
                backgroundColor: 'white',
                borderRadius: 30,
                marginHorizontal: 8,
                marginBottom: 12,
                elevation: 3,
              }}>
              <Text
                style={{
                  color: themeColors.text,
                  marginRight: 5,
                  fontWeight: 'bold',
                }}>
                {items.length} X
              </Text>
              <Image
                source={dish.image}
                style={{
                  height: 56,
                  width: 56,
                  borderRadius: 30,
                  objectFit: 'contain',
                }}
              />
              <Text
                style={{
                  flex: 1,
                  marginLeft: 5,
                  fontWeight: 'bold',
                  color: 'rgb(55 65 81)',
                }}>
                {dish.name}
              </Text>
              <Text style={{color: 'black', fontWeight: '600'}}>
                ${dish.price}
              </Text>
              <TouchableOpacity
                style={{
                  padding: 3,
                  borderRadius: 60,
                  backgroundColor: themeColors.bgColor(1),
                  marginLeft: 5,
                }}
                onPress={()=>dispatch(removeFromBasket({id:dish.id}))}
                >
                <Text
                  style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
                  {'  '}-{'  '}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      {/* totals  */}
      <View
        style={{
          padding: 24,
          paddingHorizontal: 16,
          marginVertical: 16,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          backgroundColor: themeColors.bgColor(0.2),
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: 'rgb(55 65 81)'}}>Subtotal</Text>
          <Text style={{color: 'rgb(55 65 81)'}}>${carttotal}</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: 'rgb(55 65 81)'}}>Delivery Fee</Text>
          <Text style={{color: 'rgb(55 65 81)'}}>${deliveryFee}</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: 'rgb(55 65 81)', fontWeight: 'bold'}}>
            Order Total
          </Text>
          <Text style={{color: 'rgb(55 65 81)', fontWeight: 'bold'}}>${carttotal+deliveryFee}</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: themeColors.bgColor(1),
            padding: 12,
            borderRadius: 30,
            marginTop:10
          }} onPress={()=> navigation.navigate("PreparingOrder")}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 22,
            }}>
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
