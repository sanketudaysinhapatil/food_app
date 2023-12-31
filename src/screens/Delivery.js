import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {featured} from '../constants';
import {useNavigation} from '@react-navigation/native';
import MapView, {Marker} from 'react-native-maps';
import {themeColors} from '../theme';
// import { Image } from 'react-native-feather';
// import MapView from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';
import { selectResturant } from '../redux/restaurentSlice';
import { emptyBasket } from '../redux/basketSlice';
import call from 'react-native-phone-call'

const Delivery = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation();
  const resturant = useSelector(selectResturant);
  const tokyoRegion = {
    latitude:18.963577,
    longitude: 72.818344,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const cancelOrder = ()=>{
    navigation.navigate('Home')
    dispatch(emptyBasket())
  }

  const triggerCall = ()=>{
    const args = {
      number: '+918530880988', // Use commas to add time between digits.
      prompt: false,
      skipCanOpen: true 
    }
    call(args).catch(console.error)
  }

  
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* map view  */}

      <MapView
        style={{flex: 1, width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 18.963577,
            longitude: 72.818344,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
        }}
        mapType="standard"
      />
      {/* <Marker
        coordinate={{
          latitude: resturant.lat,
          longitude: resturant.lng,
        }}
        title={resturant.title}
        description={resturant.description}
        pinColor={themeColors.bgColor(1)}
      /> */}
       <Marker 
            coordinate={{
              latitude: 18.963577,
              longitude: 72.818344,
            }}
            image={require('../assets/icons/xx.png')}
            title="Test Title"
            description="This is the test description"
          >
            <Text>dlksjg;lskdjf</Text>
          </Marker>
      <MapView />
      <View
        style={{
          marginTop: -48,
          backgroundColor: 'white',
          position: 'relative',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            paddingTop: 40,
          }}>
          <View>
            <Text
              style={{color: 'rgb(55 65 81)', fontWeight: '700', fontSize: 17}}>
              Estimated Arrival
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'rgb(55 65 81)',
                fontSize: 22,
              }}>
              20-30 Minutes
            </Text>
            <Text
              style={{
                fontWeight: '600',
                color: 'rgb(55 65 81)',
                fontSize: 17,
                marginTop: 8,
              }}>
              Your Order is own its way
            </Text>
          </View>
          <Image
            style={{width: 96, height: 96}}
            source={require('../assets/images/b3.png')}
          />
        </View>

        <View
          style={{
            backgroundColor: themeColors.bgColor(0.8),
            padding: 8,
            justifyContent: 'space-between',
            marginVertical: 20,
            borderRadius: 50,
            marginHorizontal: 8,
          }}>
          <View
            style={{
              padding: 4,
              borderRadius: 50,
              backgroundColor: 'rgba(255,255,255,0.4)',
              flexDirection: 'row',
            }}>
            <Image
              style={{height: 64, width: 64, borderRadius: 50}}
              source={require('../assets/images/deliveryGuy.png')}
            />
            <View style={{marginLeft: 12, flex: 1}}>
              <Text style={{fontWeight: 'bold', color: 'white', fontSize: 19}}>
                Sanket Patil
              </Text>

              <Text style={{fontWeight: '600', color: 'white', fontSize: 16}}>
                Your Rider
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 12,
                marginLeft: 12,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  padding: 8,
                  borderRadius: 50,
                  marginRight: 10,
                }} onPress={()=>triggerCall()}>
                <Image
                  tintColor={themeColors.bgColor(1)}
                  source={require('../assets/icons/call.png')}
                  style={{height: 22, width: 22}}
                />
              </TouchableOpacity>

              <TouchableOpacity
             
                style={{
                  backgroundColor: 'white',
                  padding: 8,
                  borderRadius: 50,
                }}
                onPress={() =>
                 cancelOrder()
                }>
                <Image
                  tintColor={'#CC2C24'}
                  source={require('../assets/icons/cancel.png')}
                  style={{height: 22, width: 22}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Delivery;

const styles = StyleSheet.create({});
