import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
const translate = require('translate-google-api');

export default function App() {
  const [text, setText] = useState('');
  const [translation, setTranslation] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Введите текст для перевода "
        value={text}
        multiline
        numberOfLines={4}
        onChangeText={ value => setText(value) }
        style={styles.originalText}
      />
      <Button
        title="Перевести"
        onPress={() => {
          translate(text, { to: 'ru' }).then(translation => {
            setTranslation(translation)
          })
        }}
      />
      <Text>
        {translation}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 40,
    paddingLeft: 10,
    paddingRight: 10
  },
  originalText: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    width: '100%',
    textAlignVertical: 'top'
  }
});
