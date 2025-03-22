// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import MyRecipesScreen from './screens/MyRecipesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="My Recipes" component={MyRecipesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// screens/HomeScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
const categories = ['Breakfast', 'Lunch', 'Dinner', 'Desserts', 'Drinks', 'Snacks', 'Healthy', 'Vegan', 'Quick', 'Kids'];

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <FlatList
        horizontal
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('RecipeDetails', { category: item })}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

// screens/RecipeDetails.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function RecipeDetails({ route }) {
  const { category } = route.params;
  return (
    <View>
      <Text>Recipes for {category}</Text>
    </View>
  );
}

// screens/FavoritesScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

export default function FavoritesScreen() {
  const [favorites, setFavorites] = useState([]);
  return (
    <View>
      <Text>Favorites</Text>
      <FlatList
        data={favorites}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

// screens/MyRecipesScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function MyRecipesScreen({ navigation }) {
  return (
    <View>
      <Text>My Recipes</Text>
      <Button title="Add New Recipe" onPress={() => navigation.navigate('AddRecipe')} />
    </View>
  );
}