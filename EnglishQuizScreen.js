import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import englishQuiz from '/screens/EnglishQuizScreens';

const QuizScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const question = englishQuiz[currentQuestion];

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    setCurrentQuestion(prev => (prev + 1) % englishQuiz.length);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question.question}</Text>
      {question.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.option,
            selectedOption === option && {
              backgroundColor: option === question.answer ? 'green' : 'red',
            },
          ]}
          onPress={() => handleOptionPress(option)}
          disabled={showAnswer}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
      {showAnswer && (
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextText}>Next Question</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20, justifyContent: 'center',
  },
  question: {
    fontSize: 22, marginBottom: 20, fontWeight: 'bold',
  },
  option: {
    backgroundColor: '#ddd', padding: 15, borderRadius: 8, marginVertical: 8,
  },
  optionText: {
    fontSize: 18,
  },
  nextButton: {
    marginTop: 20, backgroundColor: '#4a47a3', padding: 15, borderRadius: 8,
  },
  nextText: {
    color: '#fff', textAlign: 'center', fontSize: 16,
  }
});

export default QuizScreen;
