import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {themeColors} from '../theme';
import * as Icon from 'react-native-feather';
import {useDispatch, useSelector} from 'react-redux';
import {addToBasket, removeFromBasket, selectBasketItemsById} from '../redux/basketSlice';

const DishRow = ({item}) => {
  const dispatch = useDispatch();

  const totoalItems = useSelector(state => selectBasketItemsById(state, item.id))
  const handleIncrease = () => {
    dispatch(addToBasket({...item}));
  };
  const handleDecrease = () => {
    dispatch(removeFromBasket({id: item.id}));
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 12,
        elevation: 7,
        marginBottom: 12,
        marginHorizontal: 8,
      }}>
      <Image
        style={{
          height: 100,
          width: 100,
          borderRadius: 30,
          objectFit: 'contain',
        }}
        source={item.image}
      />
      <View style={{flex: 1, marginTop: 12}}>
        <View style={{paddingLeft: 12, paddingBottom: 8}}>
          <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
            {item.name}
          </Text>
          <Text style={{color: 'rgb(55 65 81)'}}>{item.description}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 12,
            alignItems: 'center',
          }}>
          <Text
            style={{color: 'rgb(55 65 81)', fontSize: 18, fontWeight: 'bold'}}>
            ${item.price}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
            disabled={!totoalItems.length}
              onPress={handleDecrease}
              style={{
                padding: 4,
                borderRadius: 60,
                backgroundColor: themeColors.bgColor(1),
              }}>
              <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
                {' '}
                -{' '}
              </Text>
            </TouchableOpacity>
            <Text style={{paddingHorizontal: 12, color: 'black'}}>{totoalItems.length}</Text>

            <TouchableOpacity
              onPress={handleIncrease}
              style={{
                padding: 4,
                borderRadius: 60,
                backgroundColor: themeColors.bgColor(1),
              }}>
              <Text style={{color: 'white', fontSize: 16}}> + </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishRow;

const styles = StyleSheet.create({});
