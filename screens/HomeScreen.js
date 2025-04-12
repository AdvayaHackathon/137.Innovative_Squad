import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleKannadaPress = () => {
    Alert.alert('Coming Soon', 'Page under development 🚧');
  };

  const handleEnglishPress = () => {
    navigation.navigate('Subjects');
  };

  return (
    <ImageBackground
      source={require('../assets/rural-edu-bg.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.topSection}>
        <Text style={styles.title}>Welcome to RuralEdu Box</Text>
        <Image source={require('../assets/logo.png')} style={styles.bookIcon} />
      </View>

      <Text style={styles.subText}>Please select your preferred language:</Text>

      <View style={styles.languageRow}>
        <TouchableOpacity style={styles.buttonKannada} onPress={handleKannadaPress}>
          <Text style={styles.buttonText}>ಕನ್ನಡ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonEnglish} onPress={handleEnglishPress}>
          <Text style={styles.buttonText}>English</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 60,
  },
  topSection: {
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Aller',
    marginBottom: 5,
  },
  bookIcon: {
    width: 40,
    height: 40,
    marginBottom: 20,
  },
  subText: {
    fontSize: 16,
    fontStyle: 'cicle',
    color: '#000',
    marginBottom: 10,
  },
  languageRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
    marginTop: 10,
  },
  buttonKannada: {
    backgroundColor: '#f59e0b',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  buttonEnglish: {
    backgroundColor: '#3b82f6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'caviar Dreams',
  },
});
