import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import React from 'react';
import {themeColors} from '../theme';
import {useNavigation} from '@react-navigation/native';

const RestCard = ({item}) => {
  console.log(item)
  console.log("======",item.name)
  const navigation = useNavigation();
  
  
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Restaurant', {...item})}>
      <View
        style={{
          marginRight: 24,
          backgroundColor: 'white',
          shadowColor: themeColors.bgColor(0.2),
          shadowRadius: 7,
          elevation: 8,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderRadius: 20,
        }}>
        <View
          style={{
            height: 144,
            width: 256,
          }}>
          <Image
            source = {item.image}
            style={{
              height: '100%',
              width: '100%',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              objectFit:"contain"
            }}
          />
        </View>

        <View style={{paddingHorizontal: 12, paddingBottom: 15, marginLeft: 2}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              paddingTop: 8,
              color: 'black',
            }}>
            {item.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 1,
            }}>
            <Image
              source={require('../assets/images/s.png')}
              style={{height: 16, width: 16, tintColor:"gray" ,opacity:0.5}}
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
            style={{flexDirection: 'row', alignItems: 'center', marginLeft: 2}}>
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
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestCard;

const styles = StyleSheet.create({});
