import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {themeColors} from '../theme';

import RestCard from './restCard';

const FeaturedRow = ({title, description, restaurants}) => {
  // console.log(restaurants);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 16,
        }}>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
            {title}
          </Text>
          <Text style={{color: 'rgb(209 213 219)', fontSize: 14}}>
            {description}
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={{color: themeColors.text}}>see All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          overflow: 'hidden',
          paddingVertical: 20,
        }}>
       
        {restaurants.map((restaurant, index) => {
          return <RestCard key={index} item={restaurant} />;
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({});
