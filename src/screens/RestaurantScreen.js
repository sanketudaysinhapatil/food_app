import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useEffect, useLayoutEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {themeColors} from '../theme';
import DishRow from '../components/dishRow';
import CartIcon from '../components/cartIcon';
import {useDispatch, useSelector} from 'react-redux';
import {selectResturant, setResturant} from '../redux/restaurentSlice';
import {emptyBasket} from '../redux/basketSlice';
// import { setRestaurent } from '../redux/restaurentSlice';

const RestaurantScreen = () => {
  const navigation = useNavigation();

  const resturants = useSelector(state => state.resturant.resturant);
  console.log("RESTURENTS", resturants)
  console.log('img URL', resturants.imgUrl);
  let dispatch = useDispatch();
  const {
    params: {
      id,
        title,
        imgUrl,
        rating,
        type,
        address,
        description,
        dishes,
        lng,
        lat,
        name
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, []);
  useEffect(() => {
    if (resturants && resturants.id != id) {
      dispatch(emptyBasket());
    }
    dispatch(
      setResturant({
        id,
        title,
        imgUrl,
        rating,
        type,
        address,
        description,
        dishes,
        lng,
        lat,
        name
      }),
    );
  }, []);

  console.log(resturants.name)

 

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar style="Light" />

      <CartIcon />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{position: 'relative'}}>
          <Image
            source={require("../assets/restaurent/logo.png")}
            style={{width: '100%', height: 288, }}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 20,
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 50,
              left: 16,
            }}
            onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/icons/left.png')}
              style={{height: 20, width: 20}}
              tintColor={themeColors.bgColor(1)}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            marginTop: -60,
            paddingTop: 24,
            backgroundColor: 'white',
          }}>
          <View style={{paddingHorizontal: 20}}>
            <Text style={{fontSize: 26, color: 'black', fontWeight: 'bold'}}>
              {resturants.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 2,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: 1,
                }}>
                <Image
                  source={require('../assets/images/s.png')}
                  style={{height: 16, width: 16, tintColor:"#fc3444"}}
                />
                <Text style={{color: 'rgb(209 213 219)'}}>
                  {resturants.stars}
                </Text>
                <Text style={{color: 'rgb(209 213 219)'}}>
                  ({resturants.review} review ) .{' '}
                  <Text style={{fontWeight: '600', color: 'black'}}>
                    {resturants.category}
                  </Text>
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 2,
                }}>
                <Image
                  source={require('../assets/icons/location.png')}
                  style={{height: 15, width: 15}}
                  tintColor="gray"
                />
                <Text style={{color: 'rgb(209 213 219)'}}>
                  Nearby . {resturants.address}
                </Text>
              </View>
            </View>
            <Text style={{marginTop: 8, color: 'rgb(107 114 128)'}}>
              {resturants.description}
            </Text>
          </View>
        </View>
        <View style={{paddingBottom: 144, backgroundColor: 'white'}}>
          <Text
            style={{
              paddingHorizontal: 16,
              fontSize: 22,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Menu
          </Text>
          {/* dishesh  */}

          {resturants?.dishes?.map((dish, index) => (
            <DishRow key={index} item={{...dish}} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({});
