import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {themeColors} from '../theme';
import Categories from '../components/categories';
import { featured } from '../constants';
import FeaturedRow from '../components/featuredRow';

const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
    
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingVertical: 8,
          marginLeft: 8,
        }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: 'rgb(209 213 219)',
          }}>
          <View style={{justifyContent: 'center', paddingLeft: 12}}>
            <Image
              source={require('../assets/icons/search.png')}
              style={{width: 20, height: 20}}
              tintColor="gray"
            />
          </View>
          <TextInput
            placeholder="Restarants"
            style={{marginLeft: 8, flex: 1}}
            placeholderTextColor="grey"
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 4,
              borderWidth: 0,
              borderLeftWidth: 1,
              paddingLeft: 8,
              borderLeftColor: 'rgb(209 213 219)',
            }}>
            <Image
              source={require('../assets/icons/location.png')}
              style={{height: 17, width: 17}} tintColor="gray"
            />
            <Text style={{color: 'gray', fontSize: 12, marginRight: 4}}>
              New York, NYC
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 12,
            borderRadius: 50,
            backgroundColor: themeColors.bgColor(1),
            padding: 12,
            borderRadius: 50,
            marginLeft: 4,
          }}>
          <Image
            source={require('../assets/icons/slider.png')}
            style={{height: 20, width: 20}}
            tintColor="white"
          />
        </View>
      </View>
{/* Main conatine  */}

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:20}}>

            {/* categories  */}
            <Categories/>

            {/* features  */}

            <View style={{marginTop:20}}>
              {
                [featured,featured, featured].map((item,index)=>{
                  return(
                    <FeaturedRow key={index} title={item.title} restaurants={item.restaurants} description={item.description}/>
                  )
                })
              }


            </View>



            


          </ScrollView>


    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
