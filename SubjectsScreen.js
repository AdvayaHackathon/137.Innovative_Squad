import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
} from 'react-native';

const subjects = [
  { title: 'Kannada', color: '#f59e0b' },
  { title: 'English', color: '#10b981' },
  { title: 'Mathematics', color: '#3b82f6' },
  { title: 'Science', color: '#8b5cf6' },
  { title: 'Social Studies', color: '#ef4444' }
];

export default function SubjectsScreen({ navigation }) {
  return (

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Choose a Subject</Text>

        {subjects.map((subject, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.button, { backgroundColor: subject.color }]}
            onPress={() => {
              if (subject.title === 'Kannada') {
                navigation.navigate('Kannada');
              } else if (subject.title === 'English') {
                navigation.navigate('English');
              } 
              else {
                Alert.alert('Coming Soon', `${subject.title} screen is under development!`);
              }
            }}
          >
            <Text style={styles.buttonText}>{subject.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.5,
  },
  scrollContent: {
    padding: 24,
    paddingTop: 80,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#000',
  },
  button: {
    padding: 18,
    borderRadius: 50,
    marginBottom: 18,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
