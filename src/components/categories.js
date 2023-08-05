import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {categories} from '../constants';

const Categories = () => {
  const [activeCategories, setActiveCategory] = useState(null);
  return (
    <View style={{marginTop: 16, flex: 1}}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15, overflow: 'visible'}}>
        {categories.map((categories, index) => {
          let isActive = categories.id == activeCategories;
          let btnClass = isActive ? 'rgb(75 85 99)':"rgb(229 231 235)"
          let textClass = isActive ? "rgb(31 41 55)": "rgb(107 114 128)"
          return (
            <View
              key={index}
              style={{
                flex: 1,
                justifyContent: 'center',
               
                marginRight: 24,
              }}>
              <TouchableOpacity
                style={{
                  padding: 4,
                  backgroundColor: 'rgb(229 231 235)',
                  borderRadius: 15,
                  backgroundColor:btnClass,

                }}
                onPress={()=> setActiveCategory(categories.id)}
                
                >
                <Image
                  style={{width: 45, height: 45}}
                  source={categories.image}
                />
               
              </TouchableOpacity>
               <Text style={{color: 'black', fontWeight: 'bold', color:textClass, textAlign:"center"  }}>
                  {categories.name}
                </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
