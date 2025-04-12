import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import SubjectsScreen from './screens/SubjectsScreen';
import KannadaScreen from './screens/KannadaScreen';
import KannadaQuizScreen from './screens/KannadaQuizScreen';
import EnglishScreen from './screens/EnglishScreen';
import EnglishQuizScreen from './screens/EnglishQuizScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="Subjects" component={SubjectsScreen} />
       <Stack.Screen name="Kannada" component={KannadaScreen} />
       <Stack.Screen name="KannadaQuiz" component={KannadaQuizScreen} />
       <Stack.Screen name="English" component={EnglishScreen} />
       <Stack.Screen name="EnglishQuiz" component={EnglishQuizScreen} />
     </Stack.Navigator>
</NavigationContainer>

  );
}
