import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {featured} from '../constants';
import {useNavigation} from '@react-navigation/native';
import MapView, {Marker} from 'react-native-maps';
import { themeColors } from '../theme';
// import MapView from 'react-native-maps';

const Delivery = () => {
  const resturant = featured.restaurants[0];
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* map view  */}

      <MapView
        initialRegion={{
            latitude: resturant.lat,
            longitude: resturant.lng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }} 
         
          mapType="standard"
        />
            <Marker 
                coordinate={{
                    latitude: resturant.lat,
                    longitude: resturant.lng
                }} 
                title={resturant.title}
                description={resturant.description}
                pinColor={themeColors.bgColor(1)}
            />
        
    </View>
  );
};

export default Delivery;

const styles = StyleSheet.create({});
