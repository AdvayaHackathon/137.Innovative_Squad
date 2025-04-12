import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import { Linking } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function KannadaScreen() {
  const [showVideo, setShowVideo] = useState(false);
  const navigation = useNavigation();

  const openPDF = () => {
    Linking.openURL('https://yourdomain.com/english_lesson.pdf'); // OR local copy using FileSystem API
  };

  const goToQuiz = () => {
    navigation.navigate('KannadaQuiz');
  };

  const playVideo = () => {
    setShowVideo(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kannada Subject</Text>

      <TouchableOpacity style={styles.button} onPress={openPDF}>
        <Text style={styles.buttonText}>Open PDF</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={goToQuiz}>
        <Text style={styles.buttonText}>Take Quiz</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={playVideo}>
        <Text style={styles.buttonText}>Watch Video Lesson</Text>
      </TouchableOpacity>

      {showVideo && (
        <Video
          source={require('../assets/videos/video.mp4')}
          useNativeControls
          resizeMode="contain"
          style={{ width: '100%', height: 250, marginTop: 20 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#4f46e5',
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
