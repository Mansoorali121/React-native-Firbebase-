import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import MyView from '../components/MyView';
import MyText from '../components/MyText';
import Search from '../components/Search';
import Category from '../components/Category';
import { ActivityIndicator } from 'react-native';
import FoodCard from '../components/FoodCard';

const Home = () => {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [categories, setCategories] = useState([]); // Initial empty array of users
  const [foods, setFoods] = useState([]);

  const addData = () => {
    firestore().collection('categories').add({
      title: 'Vegetables ',
      imageURL:'https://media.istockphoto.com/id/512907694/photo/collection-vegetables.jpg?s=612x612&w=0&k=20&c=LGPsT8tp72qkDNwRbA6kr75w1JgzoNl8uklz4B5BxJs='
    });
  };

  useEffect(() => {
    const subscriber = firestore()
      .collection('categories')
      .onSnapshot(querySnapshot => {
        const categories = [];

        querySnapshot.forEach(documentSnapshot => {
          categories.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setCategories(categories);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();

    if (loading) {
      return <ActivityIndicator />;
    }
  }, []);
  useEffect(() => {
    const subscriber = firestore()
      .collection('foods')
      .onSnapshot(res => {
        const foods = [];

        res.forEach(documentSnapshot => {
          foods.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setFoods(foods);

        return () => subscriber();
      });
  }, []);
  return (
    <MyView style={styles.con}>
      <MyText
        style={{
          marginTop: 57,
          marginBottom: 57,
          marginLeft: 21,
          fontSize: 19,
        }}
      >
        Choose the
      </MyText>
      <MyText boldy style={styles.text1}>
        Food You Love
      </MyText>
      <Search />
      <MyText style={styles.text}>Categories</MyText>
      <Button title='Add Category' onPress={addData} />
      <View style={{ height: 150 }}>
        {/* <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <Category 
            title="Pizza"
            image={require('../notifications/assets/food/piza.png')}
          />
          <Category
            title="French Fries"
            image={require('../notifications/assets/food/frenchFries.png')}
          />

          <Category
            title="Teh Special"
            image={require('../notifications/assets/food/food.png')}
          />
          <Category
            title="K F C"
            image={require('../notifications/assets/food/KFC.png')}
          />
        </ScrollView> */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({ item }) => (
            <Category title={item.title} image={{ uri: item.imageURL }} />
          )}
        />
      </View>

      <MyText style={styles.text}>Main Dishes</MyText>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={foods}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <FoodCard
            title={item.title}
            image={item.imageURL}
            price={item.price}
          />
        )}
      />
    </MyView>
  );
};

export default Home;

const styles = StyleSheet.create({
  con: {
    backgroundColor: '#f7f6ff',
  },
  text: {
    marginLeft: 21,
    fontSize: 19,
    marginBottom: 13,
  },
  text1: { marginLeft: 21, marginBottom: 13, fontSize: 20 },
});
