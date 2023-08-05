import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {themeColors} from '../theme';
import DishRow from '../components/dishRow';
import CartIcon from '../components/cartIcon';

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  let item = params;
  // console.log(item)

  return (
    <View style={{}}>
      <StatusBar style="Light"/>
      
      <CartIcon/>

      <ScrollView>
        <View style={{position: 'relative'}}>
          <Image source={item.image} style={{width: '100%', height: 288}} />
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
              {item.name}
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
                  style={{height: 16, width: 16}}
                />
                <Text style={{color: 'rgb(209 213 219)'}}>{item.stars}</Text>
                <Text style={{color: 'rgb(209 213 219)'}}>
                  ({item.review} review ) .{' '}
                  <Text style={{fontWeight: '600', color: 'black'}}>
                    {item.category}
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
                  Nearby . {item.address}
                </Text>
              </View>
            </View>
            <Text style={{marginTop: 8, color: 'rgb(107 114 128)'}}>
              {item.description}
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

          {item.dishes.map((dish, index) => 
            <DishRow key={index} item={{...dish}}/>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({});
