import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function KannadaQuizScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 Kannada Quiz Coming Soon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
});
