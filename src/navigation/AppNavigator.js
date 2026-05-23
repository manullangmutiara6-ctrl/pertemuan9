import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="Detail" component={DetailScreen} options={({ route }) => ({ title: route.params.destination.name })} />
    </HomeStack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#00b894',
        tabBarInactiveTintColor: '#b2bec3',
        tabBarStyle: { paddingBottom: 8, height: 60 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomeTab') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'SearchTab') iconName = focused ? 'search' : 'search-outline';
          else if (route.name === 'FavoritesTab') iconName = focused ? 'heart' : 'heart-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
        <Tab.Screen name="HomeTab" component={HomeStackNavigator} options={{ title: 'Home' }} />
        <Tab.Screen name="SearchTab" component={SearchScreen} options={{ title: 'Search' }} />
        <Tab.Screen name="FavoritesTab" component={FavoritesScreen} options={{ title: 'Favorites' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}